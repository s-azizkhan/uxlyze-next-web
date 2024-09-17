import { APP_API_URL } from "@/config/app.config";
import { SelectReport, SelectReportResult } from "@/db/schema";
import { IAnalysisResult, IReportConfig } from "@/types/analysis-result";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface IResult extends SelectReportResult {
  result: IAnalysisResult;
}

export interface IReportWithResult extends SelectReport {
  resultData?: IResult;
  reportConfig: IReportConfig;
}

export const fetchReportWithResult = async (reportId: string) => {
  const response = await fetch(`${APP_API_URL}/reports/${reportId}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch report");
  }
  return response.json();
};

export function useReport(reportId: string): UseQueryResult<IReportWithResult> {
  return useQuery({
    queryKey: ["report", reportId],
    queryFn: () => fetchReportWithResult(reportId),
  });
}
