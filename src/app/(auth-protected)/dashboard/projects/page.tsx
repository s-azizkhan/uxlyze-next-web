import { Button } from "@/components/ui/button";
import { PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import ProjectsList from "./_components/ProjectsList";
import { metaTitlePostFix } from "@/app/layout";
import ProjectsCard from "../_components/ProjectsCard";

export const metadata = {
  title: "My Projects | " + metaTitlePostFix,
  description: "View your projects and reports",
};

export default function ProjectsPage() {
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
      {/* TODO: uncomment this */}
      {/* <ProjectsList /> */}
      <ProjectsCard limit={40} />
    </div>
  );
}
