"use client";

import React, { useEffect, useState } from "react";
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
import { useRouter, useSearchParams } from "next/navigation";
import ContinueWithGoogleBtn from "@/components/continue-with-google-btn";
import { useSession } from "next-auth/react";

const formSchema = z
  .object({
    name: z.string().min(1, {
      message: "This field has to be filled.",
    }),
    email: z
      .string()
      .min(1, {
        message: "This field has to be filled.",
      })
      .email("This is not a valid email")
      .max(300, {
        message: "Password can't be longer than 300 characters.",
      }),
    password: z
      .string()
      .min(6, { message: "Password has to be at least 6 characters long." }),
    confirmPassword: z.string().min(6, {
      message: "Confirm-Password has to be at least 6 characters long.",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

const RegisterForm = () => {
  const router = useRouter();

  const qq = useSearchParams();

  const qEmail = qq.get("email") as string;

  // get user from useSession
  const { data: session } = useSession();
  // if user logged in, redirect to home
  useEffect(() => {
    if (session?.user?.email) {
      router.push("/dashboard");
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    values.email = values.email.toLowerCase();

    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.error) {
      toast.error(data.error);
    } else if (data.success) {
      toast.success(data.success);
      // reset the form
      form.reset();
      router.push("/login");
    } else if (data.message) {
      toast(data.message);
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="grid gap-4">
        <ContinueWithGoogleBtn />
        <div className="flex items-center gap-4">
          <span className="h-px w-full bg-input"></span>
          <span className="text-xs text-muted-foreground">OR</span>
          <span className="h-px w-full bg-input"></span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your name used to call you in our app.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              defaultValue={qEmail}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@whatever.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your email used to sign in to our app.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="****" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your password used to sign in to our app.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Repeat Password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please confirm your password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? "Creating account..." : "Create an account"}
            </Button>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline text-primary">
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;
