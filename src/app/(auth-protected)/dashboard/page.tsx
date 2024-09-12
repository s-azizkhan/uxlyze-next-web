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
import ProjectsCard from "./_components/ProjectsCard";
import ReportsCard from "./_components/ReportsCard";

// metadata
export const metadata = {
  title: "Dashboard | " + metaTitlePostFix,
  description: "View your projects and reports",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">My Projects</h1>
        <Link href="/dashboard/projects/new">
          <Button>
            <PlusSignIcon className="h-5 w-5 mr-2" />
            New Project
          </Button>
        </Link>
      </div>
      <ProjectsCard />

      {/* New reports section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Recent Reports</h2>
          <Link href="/dashboard/reports">
            <Button variant="outline">
              View All Reports
              <ArrowRight01Icon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <ReportsCard />
      </div>
    </div>
  );
}
