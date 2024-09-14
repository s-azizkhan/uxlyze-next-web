import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateProjectDialog({
  isOpen,
  onClose,
}: CreateProjectDialogProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, type, description }),
      });

      if (response.ok) {
        const project = await response.json();
        toast.success("Project created successfully!");
        router.push(`/dashboard/projects/${project.id}`);
      } else {
        throw new Error("Failed to create project");
      }
    } catch (error) {
      toast.error("Failed to create project. Please try again.");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Select onValueChange={setType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="web-app">Web App</SelectItem>
              <SelectItem value="mobile-app">Mobile App</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Project Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Project"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
