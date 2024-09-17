"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SparklesIcon } from "hugeicons-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { FeedbackInput, feedbackSchema } from "@/lib/validations/feedback";
import { Input } from "../ui/input";
import MaxWidthWrapper from "../shared/max-width-wrapper";
import TitleTopBadge from "../shared/title-top-badge";
import Image from "next/image";

export default function SubmitFeedbackSection() {
  const form = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: FeedbackInput) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Feedback submitted successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to submit feedback");
      }
    } catch (error) {
      toast.error("An error occurred while submitting feedback");
    }
  };

  return (
    <MaxWidthWrapper>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 mb-8 lg:mb-16">
            <TitleTopBadge title="We Value Your Feedback" />

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-snug">
              Share Your Thoughts with Us!
              <span className="inline-flex items-center ml-2">
                <SparklesIcon className="w-8 h-8 text-purple-600 animate-spin-slow" />
              </span>
            </h2>

            <p className="text-gray-500 dark:text-gray-300 text-lg">
              Your feedback helps us improve. Let us know what you think!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center bg-white rounded-xl shadow-lg">
              <Image
                src="https://illustrations.popsy.co/violet/happy-man-waving.svg" // Replace with your image path
                alt="Feedback"
                width={500}
                height={500}
                className="w-full h-auto max-w-md"
              />
            </div>

            {/* Right Side - Form */}
            <div className="space-y-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Email Input */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            type="email"
                            className="rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Feedback Textarea */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your feedback"
                            rows={6}
                            className="rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-xl"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "Submit Feedback"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
