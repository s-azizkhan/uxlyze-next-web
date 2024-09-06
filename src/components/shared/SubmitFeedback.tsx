"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export default function SubmitFeedback() {
  const [isOpen, setIsOpen] = useState(false);

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
        setIsOpen(false);
      } else {
        toast.error(result.error || "Failed to submit feedback");
      }
    } catch (error) {
      toast.error("An error occurred while submitting feedback");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
          <Button
            variant="default"
            className="rotate-[-90deg] origin-right bg-primary text-primary-foreground hover:bg-primary/90 rounded-t-lg rounded-b-none px-6 py-2"
          >
            <MessageSquarePlusIcon className="mr-2 h-4 w-4 rotate-90" />
            Submit Feedback
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Feedback</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your feedback here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? "Submitting..."
                : "Submit Feedback"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
