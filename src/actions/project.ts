import { db } from "@/db";
import { projectsTable } from "@/db/schema/project.schema";
import { eq } from "drizzle-orm";

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
