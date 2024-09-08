import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
// Mock data (replace with actual data fetching logic)
const reports = [
  { id: 1, title: "Initial Analysis", createdAt: "2023-04-10" },
  { id: 2, title: "Usability Test Results", createdAt: "2023-04-12" },
  { id: 3, title: "Final Recommendations", createdAt: "2023-04-15" },
];
export default function ViewAllReportsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">All Reports</h1>
        <Link href={`/dashboard/projects/${params.id}/reports/new`}>
          <Button>
            <PlusSignIcon className="h-5 w-5 mr-2" />
            New Report
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Created on: {report.createdAt}
              </p>
              <Link
                href={`/dashboard/projects/${params.id}/reports/${report.id}`}
              >
                <Button variant="outline" className="w-full">
                  <EyeIcon className="mr-2 h-4 w-4" />
                  View Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
