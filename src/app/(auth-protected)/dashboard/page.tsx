import { Button } from "@/components/ui/button";
import { ArrowRight01Icon, EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { metaTitlePostFix } from "@/app/layout";
import ProjectsCard from "./_components/ProjectsCard";
import ReportsCard from "./_components/ReportsCard";

// metadata
export const metadata = {
  title: "Dashboard | " + metaTitlePostFix,
  description: "View your projects and reports",
};

export default async function DashboardPage() {
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
      <ReportsCard />
    </div>
  );
}
