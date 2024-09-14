"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import UrlSelector from "./UrlSelector";
import { ArrowRight01Icon, ArrowLeft01Icon } from "hugeicons-react";
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
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stepper } from "@/components/ui/stepper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  website: z.string().url({ message: "Please enter a valid URL" }),
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  includePreview: z.boolean().default(false),
  includePSI: z.boolean().default(false),
  includeAIAnalysis: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

export default function CreateReport({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [skipUrlFetch, setSkipUrlFetch] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: "",
      title: "Analysis Report",
      includePreview: false,
      includePSI: false,
      includeAIAnalysis: true,
    },
  });

  const handleWebsiteSubmit = async (values: FormValues) => {
    if (skipUrlFetch) {
      handleUrlSubmit(values.website);
      return;
    }

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
      const formValues = form.getValues();
      const response = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: selectedUrl,
          title: formValues.title,
          projectId,
          includePreview: formValues.includePreview,
          includePSI: formValues.includePSI,
          includeAIAnalysis: formValues.includeAIAnalysis,
          skipUrlFetch,
        }),
      });

      if (response.ok) {
        const resp = await response.json();
        toast({
          title: `Report Generation Started`,
          description: "You will be redirected to the report page.",
        });
        router.push(`/dashboard/projects/${projectId}/reports/${resp.data.id}`);
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

  const steps = ["Report Details", "Select URL"];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <Stepper steps={steps} activeStep={step} className="mb-6" />
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleWebsiteSubmit)}
              className="space-y-3"
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
                        className="w-full"
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
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="includePreview"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between p-3 border rounded-md">
                      <FormLabel className="text-sm font-medium">
                        Include Preview
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="includePSI"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between p-3 border rounded-md">
                      <FormLabel className="text-sm font-medium">
                        Include PageSpeed Insights
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="includeAIAnalysis"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between p-3 border rounded-md">
                      <FormLabel className="text-sm font-medium">
                        Include AI Analysis
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="skipUrlFetch"
                  checked={skipUrlFetch}
                  onCheckedChange={(checked) =>
                    setSkipUrlFetch(checked as boolean)
                  }
                />
                <Label htmlFor="skipUrlFetch" className="text-sm">
                  Run without fetching URL content
                </Label>
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading && !skipUrlFetch
                  ? "Fetching URLs..."
                  : skipUrlFetch
                  ? "Generate Report"
                  : "Fetch URLs"}
                <ArrowRight01Icon className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Form>
        ) : (
          <div className="space-y-4">
            <UrlSelector
              urls={urls}
              onSubmit={handleUrlSubmit}
              loading={loading}
            />
            <Button
              onClick={handleStartOver}
              variant="outline"
              className="w-full"
            >
              <ArrowLeft01Icon className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
