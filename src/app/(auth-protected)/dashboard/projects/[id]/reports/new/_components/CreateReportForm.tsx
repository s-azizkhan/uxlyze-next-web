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
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
const formSchema = z.object({
  title: z.string().min(1, "Report title is required"),
  description: z.string().optional(),
  figmaUrl: z.string().url("Invalid Figma URL").optional().or(z.literal("")),
  websiteUrl: z
    .string()
    .url("Invalid website URL")
    .optional()
    .or(z.literal("")),
});
export default function CreateReportForm({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      figmaUrl: "",
      websiteUrl: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // TODO: Implement API call to create report
      console.log(values);
      toast.success("Report created successfully!");
      router.push(`/dashboard/projects/${projectId}`);
    } catch (error) {
      toast.error("Failed to create report. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Create New Report</h2>
          <Link
            href={`/dashboard/projects/${projectId}`}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1 inline" />
            Back to Project
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter report title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter report description"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          disabled={isLoading}
          onClick={form.handleSubmit(onSubmit)}
          className="w-full"
        >
          {isLoading ? "Creating..." : "Create Report"}
        </Button>
      </CardFooter>
    </Card>
  );
}
