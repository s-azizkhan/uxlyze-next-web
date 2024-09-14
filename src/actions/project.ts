import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { eq } from "drizzle-orm";

export async function getProjectsByUserId(
  userId: string,
  limit: number,
  offset: number
) {
  try {
    const projects = await db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.userId, userId))
      .limit(limit)
      .offset(offset);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function getProjectById(id: string) {
  try {
    const project = await db.query.projectsTable.findFirst({
      where: eq(projectsTable.id, id),
      //   with: {
      //     reports: true,
      //   },
    });

    if (!project) {
      return null;
    }
    return project;
  } catch (error) {
    console.error(error);
    return null;
  }
}
