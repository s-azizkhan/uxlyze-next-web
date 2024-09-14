import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { and, desc, eq, isNotNull } from "drizzle-orm";

export async function getProjectsByUserId(
  userId: string,
  limit: number,
  offset: number
) {
  try {
    const projects = await db.query.projectsTable.findMany({
      where: and(
        eq(projectsTable.userId, userId),
        isNotNull(projectsTable.deletedAt)
      ),
      limit,
      offset,
      orderBy: (projects, { desc }) => [desc(projects.createdAt)],
    });
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
