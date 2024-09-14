import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { reportsTable } from "@/db/schema/report.schema";
import { authProtectServerSide } from "@/utils/auth";

export async function POST(request: NextRequest) {
  try {
    const currentUser = await authProtectServerSide(request);
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, projectId, url } = await request.json();
    if (!title || !projectId || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const report = await db
      .insert(reportsTable)
      .values({
        title,
        projectId,
        webUrl: url,
        userId: currentUser.id,
      })
      .returning();

    return NextResponse.json(report[0]);
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
