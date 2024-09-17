import { SelectProject } from "@/db/schema";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useProjects(
  limit: number = 4,
  offset: number = 0
): UseQueryResult<SelectProject[]> {
  return useQuery({
    queryKey: ["projects", limit, offset],
    queryFn: () =>
      fetch(`/api/projects?limit=${limit}&offset=${offset}`).then((res) =>
        res.json()
      ),
  });
}
