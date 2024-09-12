"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon, EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { metaTitlePostFix } from "@/app/layout";

// Add this after the existing projects array
const recentReports = [
  {
    id: 1,
    projectId: 1,
    title: "E-commerce Redesign Analysis",
    projectName: "E-commerce Redesign",
    createdAt: "2023-04-20",
  },
  {
    id: 2,
    projectId: 2,
    title: "Mobile App UI Usability Test",
    projectName: "Mobile App UI",
    createdAt: "2023-04-18",
  },
  {
    id: 3,
    projectId: 3,
    title: "Dashboard Layout Evaluation",
    projectName: "Dashboard Layout",
    createdAt: "2023-04-16",
  },
];
export default function ReportsCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentReports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Project: {report.projectName}
              </p>
              <p className="text-sm text-muted-foreground">
                Created on: {report.createdAt}
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
    </>
  );
}
