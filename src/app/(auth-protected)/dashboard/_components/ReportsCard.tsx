"use client";

import { Button } from "@/components/ui/button";
import { EyeIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useReports } from "@/hooks/useReports";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import CreateReportDialog from "./CreateReportDialog";
import { ArrowRight01Icon } from "hugeicons-react";

export default function ReportsCard() {
  const { data: recentReports, isLoading, error } = useReports("", 3);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  if (isLoading) return <ReportsCardSkeleton />;
  if (error) return <div>Error loading reports</div>;

  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <h2 className="text-2xl font-semibold md:text-3xl">Recent Reports</h2>
          <div className="flex gap-2">
            {/* TODO: show this button */}
            <Button onClick={() => setIsCreateDialogOpen(true)} className="">
              <PlusIcon className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Link href="/dashboard/reports">
              <Button variant="outline">
                View All Reports
                <ArrowRight01Icon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {recentReports && recentReports.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentReports.map((report) => (
              <Card
                key={report.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{report.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Project: {report.project.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Created on:{" "}
                    {report.createdAt
                      ? new Date(report.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/dashboard/projects/${report.projectId}/reports/${report.id}`}
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      View Report
                      <EyeIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <NoReportsCard onCreateReport={() => setIsCreateDialogOpen(true)} />
        )}
        <CreateReportDialog
          isOpen={isCreateDialogOpen}
          onClose={() => setIsCreateDialogOpen(false)}
        />
      </div>
    </>
  );
}

function NoReportsCard({ onCreateReport }: { onCreateReport: () => void }) {
  return (
    <Card className="hover:shadow-lg transition-shadow text-center p-6 border-dashed">
      <CardHeader>
        <CardTitle className="text-xl">No Reports Yet</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Create your first report to get started
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full sm:w-auto" onClick={onCreateReport}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </CardFooter>
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
