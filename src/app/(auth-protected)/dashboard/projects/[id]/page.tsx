import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";

// Mock data (replace with actual data fetching logic)
const project = {
  id: 1,
  name: "E-commerce Redesign",
  type: "Website",
  description:
    "A complete redesign of our e-commerce platform to improve user experience and conversion rates.",
  figmaUrl: "https://figma.com/file/abc123",
  websiteUrl: "https://example.com",
  reports: [
    { id: 1, name: "Initial Analysis", createdAt: "2023-04-10" },
    { id: 2, name: "Usability Test Results", createdAt: "2023-04-12" },
    { id: 3, name: "Final Recommendations", createdAt: "2023-04-15" },
  ],
};

export default function ViewProjectPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">{project.name}</h1>
        <Link href={`/dashboard/projects/${params.id}/reports/new`}>
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
              href={project.figmaUrl}
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
              href={project.websiteUrl}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.name}</CardTitle>
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
