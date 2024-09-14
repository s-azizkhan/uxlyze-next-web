import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { SelectProject } from "@/db/schema/project.schema";
import { SelectReport } from "@/db/schema";

export interface ProjectWithReports extends SelectProject {
  reports?: SelectReport[];
}

async function fetchProject(projectId: string): Promise<ProjectWithReports> {
  const response = await fetch(`/api/projects/${projectId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}

export function useProject(
  projectId: string
): UseQueryResult<ProjectWithReports> {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => fetchProject(projectId),
  });
}
