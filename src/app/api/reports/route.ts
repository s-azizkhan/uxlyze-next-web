import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reportsTable } from "@/db/schema/report.schema";
import { authProtectServerSide } from "@/utils/auth";
import { projectsTable } from "@/db/schema";
import { and, eq, sql, gt, isNull } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const currentUser = await authProtectServerSide(request);
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      title,
      projectId,
      url,
      includePreview = false,
      includePSI = false,
      includeAIAnalysis = false,
      skipUrlFetch = false,
    } = await request.json();
    if (!title || !projectId || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for existing reports within the last 2 minutes
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    const existingReport = await db.query.reportsTable.findFirst({
      where: and(
        eq(reportsTable.webUrl, url),
        eq(reportsTable.userId, currentUser.id),
        gt(reportsTable.createdAt, twoMinutesAgo)
      ),
    });

    if (existingReport) {
      return NextResponse.json(
        {
          error:
            "You can generate a report for a URL once in 2 minutes. Please try with another URL.",
        },
        { status: 429 }
      );
    }

    // check if the project exists
    const project = await db.query.projectsTable.findFirst({
      where: and(
        eq(projectsTable.id, projectId),
        eq(projectsTable.userId, currentUser.id),
        isNull(projectsTable.deletedAt)
      ),
    });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const reportConfig = {
      includePreview,
      includePSI,
      includeAIAnalysis,
      skipUrlFetch,
    };

    const report = await db
      .insert(reportsTable)
      .values({
        title,
        projectId,
        webUrl: url,
        userId: currentUser.id,
        reportConfig,
      })
      .returning();

    // update the count on the project
    await db
      .update(projectsTable)
      .set({
        reportCount: sql`${project.reportCount} + 1`,
      })
      .where(eq(projectsTable.id, projectId));

    return NextResponse.json(report[0], { status: 201 });
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
