"use client";

import { Button } from "@/components/ui/button";
import { Download, Edit2 } from "lucide-react";
import { IAnalysisResult } from "@/types/analysis-result";
import NavigationAnalysis from "./NavigationAnalysis";
import SEOAnalysis from "./SEOAnalysis";
import ColorUsageAnalysis from "./ColorUsageAnalysis";
import FontUsageAnalysis from "./FontUsageAnalysis";
import ScreenshotGallery from "./ScreenshotGallery";
import IssuesAndSuggestions from "./IssuesAndSuggestions";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyMetricsCard from "./KeyMetricsCard";
import { IReportWithResult, useReport } from "@/hooks/useReport";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { IconLoader, IconLoader2 } from "@tabler/icons-react";
import PendingStatusReportCard from "./PendingStatusReportCard";
import LoadingReportSkeletonUI from "./LoadingReportSkeletonUI";
import NoReportFoundUI from "./NoReportFoundUI";
import ReportDisclaimer from "./ReportDisclaimer";

export default function ViewReportResult({ reportId }: { reportId: string }) {
  const { data: reportData, isLoading } = useReport(reportId);

  if (isLoading) {
    return <LoadingReportSkeletonUI />;
  }

  if (!reportData) {
    return <NoReportFoundUI />;
  }

  console.log({ reportData });

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        <header className="mb-8 bg-gradient-to-r to-veronica-600 from-indigo-600 p-6 sm:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center relative z-10">
            <div className="mb-6 sm:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-4"
              >
                {reportData.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-purple-100 text-lg sm:text-xl"
              >
                {reportData.webUrl}
              </motion.p>

              {/* TODO: Add download and edit report buttons */}
              {/* <div className="hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex space-x-4"
                >
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" /> Download Report
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-indigo-600 transition-colors"
                  >
                    <Edit2 className="mr-2 h-5 w-5" /> Edit Report
                  </Button>
                </motion.div>
              </div> */}
            </div>
            {reportData.status == "completed" &&
              reportData.resultData &&
              reportData.reportConfig.includeAIAnalysis &&
              reportData.resultData.result.geminiAnalysis && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mb-2 sm:mb-4">
                    <CircularProgressbar
                      value={
                        reportData.resultData.result.geminiAnalysis
                          .total_score * 10
                      }
                      text={`${reportData.resultData.result.geminiAnalysis.total_score.toFixed(
                        1
                      )}`}
                      styles={buildStyles({
                        textSize: "24px",
                        pathColor: `rgba(255, 255, 255, ${
                          reportData.resultData.result.geminiAnalysis
                            .total_score / 10
                        })`,
                        textColor: "#ffffff",
                        trailColor: "rgba(255, 255, 255, 0.2)",
                      })}
                    />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    Overall Score
                  </span>
                  <span className="text-xs sm:text-sm mt-1 sm:mt-2 px-2 sm:px-3 py-1 bg-white/20 rounded-full">
                    {
                      reportData.resultData.result.geminiAnalysis
                        .website_category
                    }
                  </span>
                </motion.div>
              )}
          </div>
        </header>

        {reportData.status !== "completed" ? (
          <PendingStatusReportCard status={reportData.status} />
        ) : (
          <CompletedStatusReport reportData={reportData} />
        )}
      </motion.div>
    </div>
  );
}

function CompletedStatusReport({
  reportData,
}: {
  reportData: IReportWithResult;
}) {
  const { reportConfig } = reportData;
  const report = reportData.resultData?.result;
  if (!report) {
    return;
  }
  return (
    <>
      <ReportDisclaimer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        <KeyMetricsCard
          title="Mobile & Readability"
          data={{
            MobileFriendly: report.MobileFriendly,
            Readability: report.Readability,
          }}
        />

        {reportConfig.includeAIAnalysis && report.geminiAnalysis && (
          <>
            <KeyMetricsCard
              title="Color Scheme"
              data={report.geminiAnalysis.color_scheme}
              type="color"
            />
          </>
        )}
        <KeyMetricsCard
          title="Navigation Overview"
          data={{
            TotalLinks: report.Navigation.totalLinks,
            NavElements: report.Navigation.navElementCount,
            InternalLinks: report.Navigation.internalLinksCount,
            ExternalLinks: report.Navigation.externalLinksCount,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-8"
      >
        {reportConfig.includeAIAnalysis && report.geminiAnalysis && (
          <>
            <IssuesAndSuggestions analysis={report.geminiAnalysis} />
          </>
        )}
        <NavigationAnalysis navigation={report.Navigation} />
        <SEOAnalysis seo={report.SEO} />
        <ColorUsageAnalysis colorUsage={report.ColorUsage} />
        <FontUsageAnalysis fontUsage={report.FontUsage} />

        {reportConfig.includePreview && (
          <ScreenshotGallery screenshots={report.Screenshots} />
        )}
      </motion.div>
    </>
  );
}
