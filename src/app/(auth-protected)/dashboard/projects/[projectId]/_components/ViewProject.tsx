import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { SelectProject } from "@/db/schema/project.schema";

export default function ViewProject({ project }: { project: SelectProject }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {project ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold md:text-3xl">
              {project.name}
            </h1>
            <Link href={`/dashboard/projects/${project.id}/reports/new`}>
              <Button>
                <PlusSignIcon className="h-5 w-5 mr-2" />
                New Report
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Project Type</CardTitle>
              </CardHeader>
              <CardContent>{project.type}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Figma URL</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={project.figmaUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {project.figmaUrl}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Website URL</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={project.websiteUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {project.websiteUrl}
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>{project.description}</CardContent>
          </Card>

          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.reports && project.reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Created on: {report.createdAt}
              </p>
              <Link
                href={`/dashboard/projects/${project.id}/reports/${report.id}`}
              >
                <Button variant="outline" className="w-full">
                  <EyeIcon className="mr-2 h-4 w-4" />
                  View Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div> */}
        </div>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
}

function SkeletonLoading() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mb-8">
        <CardHeader>
          <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
      <Skeleton className="h-8 w-24 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-24 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
