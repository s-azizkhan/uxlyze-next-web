"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useProjects } from "@/hooks/useProjects";

interface CreateReportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateReportDialog({
  isOpen,
  onClose,
}: CreateReportDialogProps) {
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: projects } = useProjects();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, projectId, url }),
      });

      if (response.ok) {
        const report = await response.json();
        toast.success("Report created successfully!");
        router.push(`/dashboard/projects/${projectId}/reports/${report.id}`);
      } else {
        throw new Error("Failed to create report");
      }
    } catch (error) {
      toast.error("Failed to create report. Please try again.");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Report</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Report Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Select onValueChange={setProjectId} required>
            <SelectTrigger>
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              {projects?.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Website URL"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Report"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
