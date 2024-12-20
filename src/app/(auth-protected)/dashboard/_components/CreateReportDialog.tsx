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
import { IconLoader } from "@tabler/icons-react";
import { Switch } from "@/components/ui/switch";

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
  const [includePreview, setIncludePreview] = useState(true);
  const [includePSI, setIncludePSI] = useState(false);
  const [includeAIAnalysis, setIncludeAIAnalysis] = useState(true);
  const router = useRouter();
  const { data: projects } = useProjects();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          projectId,
          url,
          includePreview,
          includePSI,
          includeAIAnalysis,
        }),
      });

      const resp = await response.json();
      if (response.ok) {
        toast.success("Report created successfully!");
        router.push(`/dashboard/reports/${resp.id}`);
      } else {
        throw new Error(resp.error || "Failed to generate report");
      }
    } catch (error: any) {
      toast.error(
        error.message || "Failed to generate report. Please try again."
      );
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate New Report</DialogTitle>
        </DialogHeader>
        {projects && projects.length > 0 ? (
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

            <div className="flex items-center justify-between">
              <label htmlFor="includePreview">
                Include Preview
                {includePreview && (
                  <span className="ml-1 text-xs text-foreground opacity-80">
                    (+10credit)
                  </span>
                )}
              </label>
              <Switch
                id="includePreview"
                checked={includePreview}
                onCheckedChange={setIncludePreview}
              />
            </div>
            {/* TODO: Uncomment this in future */}
            {/* <div className="flex items-center justify-between">
              <label htmlFor="includePSI">Include PSI</label>
              <Switch
                id="includePSI"
                checked={includePSI}
                onCheckedChange={setIncludePSI}
              />
            </div> */}
            <div className="flex items-center justify-between">
              <label htmlFor="includeAIAnalysis">
                Include AI Analysis
                {includeAIAnalysis && (
                  <span className="ml-1 text-xs text-foreground opacity-80">
                    (+20credit)
                  </span>
                )}
              </label>
              <Switch
                id="includeAIAnalysis"
                checked={includeAIAnalysis}
                onCheckedChange={setIncludeAIAnalysis}
              />
            </div>

            <div className="flex items-center justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Generating..." : "Generate Report"}
                {isLoading && (
                  <IconLoader className="ml-2 h-4 w-4 animate-spin" />
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div>Please create a project first to generate a report.</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
