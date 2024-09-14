"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, PlusSignIcon } from "hugeicons-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useProject } from "@/hooks/useProject";
import { useState } from "react";
import { EditIcon } from "lucide-react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { IconLoader } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { SelectProject } from "@/db/schema";

export default function ViewProject({ projectId }: { projectId: string }) {
  const router = useRouter();

  const {
    data: project,
    isLoading: isProjectLoading,
    error,
    refetch,
  } = useProject(projectId);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editedProject, setEditedProject] = useState<SelectProject | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  if (isProjectLoading) return <SkeletonLoading />;
  if (error) return <div>Error loading project</div>;
  if (!project) return <div>Project not found</div>;

  const handleUpdateProject = async () => {
    if (!editedProject) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProject),
      });

      if (response.ok) {
        toast.success("Project updated successfully");
        setIsEditDialogOpen(false);
        // Refresh the project data
        refetch();
      } else {
        toast.error("Failed to update project");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("An error occurred while updating the project");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProject = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Project deleted successfully");
        // Redirect to projects list or dashboard
        router.push("/dashboard/projects");
      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("An error occurred while deleting the project");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {project ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-3xl font-bold mr-3">{project.name}</h1>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary">
                {project.type}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setEditedProject(project);
                  setIsEditDialogOpen(true);
                }}
                variant="outline"
                size="sm"
                className="rounded-xl"
              >
                <EditIcon className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button
                onClick={() => setIsDeleteDialogOpen(true)}
                variant="outline"
                size="sm"
                className="text-red-500 hover:bg-red-50 rounded-xl"
              >
                <TrashIcon className="h-4 w-4 mr-2" />
                Delete
              </Button>
              <Link href={`/dashboard/projects/${project.id}/reports/new`}>
                <Button size="sm" className="bg-primary text-white rounded-xl">
                  <PlusSignIcon className="h-4 w-4 mr-2" />
                  New Report
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg">Description</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">
                  {project.description || "No description provided."}
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.reports &&
              project.reports.map((report) => (
                <Card
                  key={report.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle>{report.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Created on:{" "}
                      {report.createdAt
                        ? new Date(report.createdAt).toLocaleDateString()
                        : "N/A"}
                    </p>
                    <p className="text-sm font-semibold mb-4">
                      Status:{" "}
                      <span
                        className={`capitalize ${
                          report.status === "completed"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {report.status}
                      </span>
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
          </div>
        </div>
      ) : (
        <SkeletonLoading />
      )}

      {/* Edit Dialog */}
      {editedProject && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <Input
                  id="name"
                  value={editedProject.name}
                  onChange={(e) =>
                    setEditedProject({
                      ...editedProject,
                      name: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={editedProject.description || ""}
                  onChange={(e) =>
                    setEditedProject({
                      ...editedProject,
                      description: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button disabled={isLoading} onClick={handleUpdateProject}>
                {isLoading ? (
                  <IconLoader className="h-4 w-4 animate-spin" />
                ) : (
                  "Update Project"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Dialog */}
      {isDeleteDialogOpen && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <p>
              Are you sure you want to delete this project? This action cannot
              be undone.
            </p>
            <DialogFooter>
              {!isLoading && (
                <Button
                  onClick={() => setIsDeleteDialogOpen(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
              )}
              <Button
                onClick={handleDeleteProject}
                variant="destructive"
                disabled={isLoading}
              >
                {isLoading ? (
                  <IconLoader className="h-4 w-4 animate-spin" />
                ) : (
                  "Delete"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
