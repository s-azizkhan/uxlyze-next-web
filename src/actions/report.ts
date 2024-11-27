import { ANALYZER_API_BASE, ANALYZER_LITE_API_BASE } from "@/config/app.config";
import { db } from "@/db";
import axios from "axios";
export const addToAnalyzerServer = async (reportId: string) => {
  if (!ANALYZER_API_BASE) {
    console.error("ANALYZER_API_BASE undefined");
    return;
  }
  try {
    axios
      .get(`${ANALYZER_API_BASE}/api/generate-report/${reportId}`)
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

export const addToAnalyzerLiteServer = async (reportId: string) => {
  if (!ANALYZER_LITE_API_BASE) {
    console.error("ANALYZER_LITE_API_BASE undefined", ANALYZER_LITE_API_BASE);
    return;
  }
  try {
    axios
      .get(`${ANALYZER_LITE_API_BASE}/api/analyze/${reportId}`)
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
