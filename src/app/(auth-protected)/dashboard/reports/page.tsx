import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon } from "hugeicons-react";
import Link from "next/link";

// Mock data (replace with actual data fetching logic)
const allReports = [
  {
    id: 1,
    title: "E-commerce Redesign Analysis",
    projectName: "E-commerce Redesign",
    createdAt: "2023-04-20",
  },
  {
    id: 2,
    title: "Mobile App UI Usability Test",
    projectName: "Mobile App UI",
    createdAt: "2023-04-18",
  },
  {
    id: 3,
    title: "Dashboard Layout Evaluation",
    projectName: "Dashboard Layout",
    createdAt: "2023-04-16",
  },
  // Add more mock reports as needed
];

export default function AllReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">All Reports</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allReports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Project: {report.projectName}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Created on: {report.createdAt}
              </p>
              <Link href={`/dashboard/reports/${report.id}`} className="w-full">
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
