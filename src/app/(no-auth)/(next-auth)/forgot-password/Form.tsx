"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import ContinueWithGoogleBtn from "@/components/continue-with-google-btn";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "This field has to be filled.",
    })
    .email("This is not a valid email"),
});

const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await fetch(`/api/auth/forgot-password`, {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await response.json();
    console.log({ data });

    if (data.error) {
      toast.error(data.error);
    } else if (data.success) {
      // reset the form
      form.setValue("email", "");
      toast.success(data.success);
    } else if (data.message) {
      toast(data.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="grid gap-4">
      <ContinueWithGoogleBtn />
      <div className="flex items-center gap-4">
        <span className="h-px w-full bg-input"></span>
        <span className="text-xs text-muted-foreground">OR</span>
        <span className="h-px w-full bg-input"></span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@whatever.com" {...field} />
                </FormControl>
                <FormDescription>
                  We will send you an email to reset your password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            Reset Password
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account yet?{" "}
            <Link href={"/register"} className="underline">
              Sign up
            </Link>
          </div>

          <div className="mt-4 text-center text-sm">
            Back to{" "}
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
