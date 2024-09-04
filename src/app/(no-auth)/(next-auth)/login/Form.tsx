"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { signIn } from "next-auth/react";
import ContinueWithGoogleBtn from "@/components/continue-with-google-btn";

const formSchema = z.object({
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
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (data?.error) {
      toast.error(data.error);
    } else if (data?.ok) {
      toast.success("Logged in successfully");
      // reset the form
      form.reset();
      router.push(callbackUrl);
    }
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Log in
          </Button>

          <div className="mt-4 text-center text-sm space-y-2">
            <p>
              Forgot your password?{" "}
              <Link href="/forgot-password" className="underline">
                Reset it
              </Link>
            </p>
            <p>
              Don&apos;t have an account yet?{" "}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
