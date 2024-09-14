"use client";
import { Button } from "@/components/ui/button";
import { EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { Skeleton } from "@/components/ui/skeleton";
import CreateProjectDialog from "./CreateProjectDialog";
import { useState } from "react";

export default function ProjectsCard({ limit = 3 }) {
  const { data: projects, isLoading, error, refetch } = useProjects(limit);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  if (isLoading) return <ProjectsSkeleton />;
  if (error) return <div>Error loading projects</div>;

  return (
    <>
      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="transition-all duration-300 hover:shadow-lg hover:scale-102 group"
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/images/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl font-bold">
                    {project.name}
                  </CardTitle>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.reportCount && project.reportCount > 0
                    ? `Reports: ${project.reportCount} | `
                    : "No reports yet"}{" "}
                  Last updated:{" "}
                  {project.updatedAt
                    ? new Date(project.updatedAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link
                  href={`/dashboard/projects/${project.id}`}
                  className="w-full"
                >
                  <Button
                    variant="default"
                    className="w-full transition-colors duration-300"
                  >
                    View Project
                    <EyeIcon className="size-5 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center h-64 border-dashed border-gray-300 rounded-xl">
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              {"You haven't created any projects yet"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start by adding a new project to analyze UI & UX designs.
            </p>
            {/* <Link href="/dashboard/projects/new"> */}
            <Button
              size="lg"
              className="rounded-xl"
              onClick={() => setIsCreateDialogOpen(true)}
            >
              <PlusSignIcon className="h-5 w-5 mr-2" />
              Create Your First Project
            </Button>
            {/* </Link> */}
          </CardContent>
        </Card>
      )}
      <CreateProjectDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        refetch={refetch}
      />
    </>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
            <Skeleton className="h-4 w-3/4 mb-4" />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
