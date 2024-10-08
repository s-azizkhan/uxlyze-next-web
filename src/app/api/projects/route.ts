import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { and, eq } from "drizzle-orm";
import { authProtectServerSide } from "@/utils/auth";
import { getProjectsByUserId } from "@/actions/project";

export async function GET(request: NextRequest) {
  try {
    const userData = await authProtectServerSide(request);
    if (!userData || !userData.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") as string) || 4;
    const offset = parseInt(searchParams.get("offset") as string) || 0;

    const projects = await getProjectsByUserId(userData.id, limit, offset);

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const userData = await authProtectServerSide(request);

    if (!userData) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, type, description, figmaUrl, websiteUrl } =
      await request.json();
    if (!name || !type) {
      return NextResponse.json(
        { error: "Name and type are required fields" },
        { status: 400 }
      );
    }

    // check if project already exists
    const projectExists = await db
      .select()
      .from(projectsTable)
      .where(
        and(
          eq(projectsTable.name, name.trim()),
          eq(projectsTable.userId, userData.id),
          eq(projectsTable.type, type)
        )
      )
      .limit(1);

    if (projectExists.length > 0) {
      return NextResponse.json(
        { error: "Project already exists" },
        { status: 400 }
      );
    }

    const newProjectData = {
      userId: userData.id,
      name: name.trim(),
      type,
      description,
      figmaUrl,
      websiteUrl,
    };

    const newProject = await db
      .insert(projectsTable)
      .values(newProjectData)
      .returning();

    return NextResponse.json(newProject[0], { status: 200 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
