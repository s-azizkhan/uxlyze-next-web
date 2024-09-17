import { ANALYZER_API_BASE } from "@/config/app.config";
import { db } from "@/db";

export const addToAnalyzerServer = async (reportId: string) => {
  if (!ANALYZER_API_BASE) {
    console.error("ANALYZER_API_BASE undefined");
    return;
  }
  try {
    const response = await fetch(`${ANALYZER_API_BASE}/webhook/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: reportId }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(`Analyzer server response for reportId: ${reportId}`, response);
  } catch (error) {
    console.error("Error adding to analyzer server:", error);
  }
};

export const getReportWithResult = async (reportId: string, userId: string) => {
  const data = await db.query.reportsTable.findFirst({
    with: {
      resultData: true,
    },
    where: (reportsTable, { eq, and }) =>
      and(eq(reportsTable.id, reportId), eq(reportsTable.userId, userId)),
  });

  return data;
};
