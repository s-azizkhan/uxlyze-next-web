import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { and, eq } from "drizzle-orm";
import { authProtectServerSide } from "@/utils/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const currentUser = await authProtectServerSide(request);
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const project = await db.query.projectsTable.findFirst({
      where: and(
        eq(projectsTable.id, params.projectId),
        eq(projectsTable.userId, currentUser.id)
      ),
      with: {
        reports: true,
      },
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { name, description } = await request.json();

  const { projectId } = params;
  const currentUser = await authProtectServerSide(request);
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const project = await db.query.projectsTable.findFirst({
    where: and(
      eq(projectsTable.id, projectId),
      eq(projectsTable.userId, currentUser.id)
    ),
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  await db
    .update(projectsTable)
    .set({ name, description })
    .where(eq(projectsTable.id, projectId));

  return NextResponse.json({ message: "Project updated successfully" });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const currentUser = await authProtectServerSide(request);
  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const project = await db.query.projectsTable.findFirst({
    where: and(
      eq(projectsTable.id, projectId),
      eq(projectsTable.userId, currentUser.id)
    ),
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  await db.delete(projectsTable).where(eq(projectsTable.id, projectId));

  return NextResponse.json({ message: "Project deleted successfully" });
}
