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

// Mock data (replace with actual data fetching logic)
const projects = [
  {
    id: 1,
    name: "E-commerce Redesign",
    type: "Website",
    image: "/images/ecommerce.jpg",
    reportsCount: 3,
    lastUpdated: "2023-04-15",
  },
  {
    id: 2,
    name: "Mobile App UI",
    type: "Mobile App",
    image: "/images/mobile-app.jpg",
    reportsCount: 2,
    lastUpdated: "2023-04-10",
  },
  {
    id: 3,
    name: "Dashboard Layout",
    type: "Web App",
    image: "/images/dashboard.jpg",
    reportsCount: 1,
    lastUpdated: "2023-04-05",
  },
];

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

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="transition-all duration-300 hover:shadow-lg hover:scale-102 group"
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
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
                  Reports: {project.reportsCount} | Last updated: {project.lastUpdated}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/dashboard/projects/${project.id}`} className="w-full">
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
              You haven't created any projects yet
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start by adding a new project to analyze UI & UX designs.
            </p>
            <Link href="/dashboard/projects/new">
              <Button size="lg" className="rounded-xl">
                <PlusSignIcon className="h-5 w-5 mr-2" />
                Create Your First Project
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}