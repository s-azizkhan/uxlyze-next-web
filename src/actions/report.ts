import { ANALYZER_API_BASE } from "@/config/app.config";
import { db } from "@/db";
import axios from "axios";
export const addToAnalyzerServer = async (reportId: string) => {
  if (!ANALYZER_API_BASE) {
    console.error("ANALYZER_API_BASE undefined");
    return;
  }
  try {
    const options = {
      headers: { "Content-Type": "application/json" },
    };

    axios
      .post(`${ANALYZER_API_BASE}/submit-job`, { payload: reportId }, options)
      .then(function (response) {
        console.log("Analyzer server response for reportId: ", response.data);
      })
      .catch(function (error) {
        console.error("Error adding to analyzer server:", error);
      });
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
