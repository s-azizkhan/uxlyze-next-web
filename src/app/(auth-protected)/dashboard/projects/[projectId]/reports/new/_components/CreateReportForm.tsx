"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import UrlSelector from "./UrlSelector";
import { ArrowRight01Icon } from "hugeicons-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  website: z.string().url({ message: "Please enter a valid URL" }),
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateReport({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "https://example.com",
      title: "",
    },
  });

  const handleWebsiteSubmit = async (values: FormValues) => {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/sitemap?url=${encodeURIComponent(values.website)}`
      );
      const data = await response.json();

      if (data.urls && data.urls.length > 0) {
        setUrls(data.urls);
        setStep(2);
      } else {
        toast({
          title: "Sitemap not found",
          description:
            "The sitemap.xml couldn't be fetched. You can still generate a report for the entered URL.",
          variant: "destructive",
        });
        setUrls([values.website]);
        setStep(2);
      }
    } catch (error) {
      console.error("Error fetching sitemap:", error);
      toast({
        title: "Error",
        description:
          "An error occurred while fetching the sitemap. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUrlSubmit = async (selectedUrl: string) => {
    setLoading(true);

    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: selectedUrl,
          title: form.getValues("title"),
          projectId,
        }),
      });

      if (response.ok) {
        const resp = await response.json();

        toast({
          title: `Report Generated for: ${resp.data.title}`,
          description: "The report has been generated successfully.",
        });
        // TODO: update the route to the report page
        router.push(`/dashboard/projects/${projectId}/reports/1`);
      } else {
        throw new Error("Failed to Generate Report");
      }
    } catch (error) {
      console.error("Error creating report:", error);
      toast({
        title: "Error",
        description:
          "An error occurred while creating the report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    form.reset();
    setUrls([]);
    setStep(1);
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleWebsiteSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter report title"
                      className="max-w-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="url"
                      placeholder="https://example.com"
                      className="max-w-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Fetching URLs..." : "Continue"}
              <ArrowRight01Icon className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </Form>
      ) : (
        <UrlSelector
          urls={urls}
          onSubmit={handleUrlSubmit}
          loading={loading}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}
