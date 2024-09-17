import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { SelectReport } from "@/db/schema/report.schema";
import { SelectProject } from "@/db/schema";

export interface ReportWithProject extends SelectReport {
  project: SelectProject;
}

export function useReports(
  projectId: string,
  limit: number = 4,
  offset: number = 0
): UseQueryResult<ReportWithProject[]> {
  return useQuery({
    queryKey: ["reports", projectId, limit, offset],
    queryFn: () =>
      fetch(
        `/api/projects/${projectId}/reports?limit=${limit}&offset=${offset}`
      ).then((res) => res.json()),
  });
}
