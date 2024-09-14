import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { SelectProject } from "@/db/schema/project.schema";

async function fetchProject(projectId: string): Promise<SelectProject> {
  const response = await fetch(`/api/projects/${projectId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  return response.json();
}

export function useProject(projectId: string): UseQueryResult<SelectProject> {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => fetchProject(projectId),
  });
}