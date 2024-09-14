"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { ArrowLeftIcon, CreativeCommonsIcon } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IconCheck, IconLoader2 } from "@tabler/icons-react";
import { FlashIcon, GoForward10SecIcon } from "hugeicons-react";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  type: z.string().min(1, "Project type is required"),
  description: z.string().optional(),
  figmaUrl: z.string().url("Invalid Figma URL").optional().or(z.literal("")),
  websiteUrl: z
    .string()
    .url("Invalid website URL")
    .optional()
    .or(z.literal("")),
});

export default function CreateProjectForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [parent] = useAutoAnimate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "My Project",
      type: "",
      description: "",
      figmaUrl: "",
      websiteUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(
          (await response.json()).error || "Failed to create project"
        );
      }

      const project = await response.json();
      toast.success("Project created successfully!");
      router.push(`/dashboard/projects/${project.id}`);
    } catch (e: any) {
      toast.error(e.message || "Failed to create project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 order-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            ref={parent}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter project name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent defaultValue="website">
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="web-app">Web App</SelectItem>
                        {/* <SelectItem value="mobile-app">Mobile App</SelectItem> */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter project description"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("type") === "web" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="figmaUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Figma URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter Figma URL" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter website URL" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="flex justify-end space-x-4 pt-8">
              {!isLoading && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/dashboard")}
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Project"}
                {isLoading ? (
                  <IconLoader2 className="w-4 h-4 ml-2 animate-spin" />
                ) : (
                  <FlashIcon className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full md:w-1/2 order-2 hidden md:block sticky top-8">
        <Image
          src="https://illustrations.popsy.co/violet/paper-documents.svg"
          alt="Create Project"
          width={500}
          height={500}
          className="w-full h-auto transform scale-x-[-1]"
        />
      </div>
    </div>
  );
}
