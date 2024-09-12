import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const project = await db.query.projectsTable.findFirst({
      where: eq(projectsTable.id, params.projectId),
      //   with: {
      //     reports: true,
      //   },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
