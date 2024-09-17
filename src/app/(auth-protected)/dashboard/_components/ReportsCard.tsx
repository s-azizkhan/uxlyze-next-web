"use client";

import { Button } from "@/components/ui/button";
import {
  EyeIcon,
  Loader2Icon,
  PlusIcon,
  ArrowRightIcon,
  AlertTriangleIcon,
  RefreshCwIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ReportWithProject, useReports } from "@/hooks/useReports";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import CreateReportDialog from "./CreateReportDialog";
import { motion } from "framer-motion";
import { IconLoader, IconLoader2 } from "@tabler/icons-react";

export default function ReportsCard() {
  const { data: recentReports, isLoading, error } = useReports("", 3);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  if (isLoading) return <ReportsCardSkeleton />;
  if (error) return <ErrorCard />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 md:mt-8"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6">
        <h2 className="text-2xl font-bold md:text-3xl mb-4 md:mb-0">
          Recent Reports
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            className="w-full sm:w-auto rounded-xl"
            size="lg"
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Generate Report
          </Button>
          <Link href="/dashboard/reports" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full rounded-xl" size="lg">
              View All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {recentReports && recentReports.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {recentReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ReportCard report={report} />
            </motion.div>
          ))}
        </div>
      ) : (
        <NoReportsCard onCreateReport={() => setIsCreateDialogOpen(true)} />
      )}
      <CreateReportDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
    </motion.div>
  );
}

function ReportCard({ report }: { report: ReportWithProject }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {report.title}
          <p className="text-sm text-muted-foreground">URL: {report.webUrl}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-1">
          <span className="font-medium">Project:</span> {report.project.name}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Created:</span>{" "}
          {report.createdAt
            ? new Date(report.createdAt).toLocaleString()
            : "N/A"}
        </p>
      </CardContent>
      <CardFooter>
        {report.status !== "completed" ? (
          <div className="flex justify-center items-center w-full text-veronica-500">
            <IconLoader className="animate-spin h-5 w-5 mr-2" />
            <span className="animate-pulse">Analyzing...</span>
          </div>
        ) : (
          <Link href={`/dashboard/reports/${report.id}`} className="w-full">
            <Button variant="default" className="w-full">
              View Report
              <EyeIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

function NoReportsCard({ onCreateReport }: { onCreateReport: () => void }) {
  return (
    <Card className="hover:shadow-lg transition-shadow text-center p-6 border-dashed">
      <CardHeader>
        <CardTitle className="text-xl">No Reports Yet</CardTitle>
        <p className="text-muted-foreground mb-4">
          Create your first report to get started
        </p>
      </CardHeader>
      <CardContent>
        <Button className="w-full sm:w-auto" onClick={onCreateReport}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </CardContent>
    </Card>
  );
}

function ReportsCardSkeleton() {
  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Recent Reports</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

function ErrorCard() {
  return (
    <Card className="bg-red-50 border-red-200">
      <CardHeader>
        <CardTitle className="text-red-700 flex items-center">
          <AlertTriangleIcon className="mr-2 h-5 w-5" />
          Error Loading Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-red-600">
          We encountered an issue while fetching your reports. Please try again
          later or contact support if the problem persists.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="text-red-700 hover:bg-red-100"
          onClick={() => window.location.reload()}
        >
          <RefreshCwIcon className="mr-2 h-4 w-4" />
          Retry
        </Button>
      </CardFooter>
    </Card>
  );
}
