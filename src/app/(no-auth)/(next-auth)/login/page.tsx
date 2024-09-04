"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./Form";
import { APP_NAME } from "@/config/app.config";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <section className="pb-32 pt-16">
      <div className="container">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold inline-flex justify-center">
            {`Welcome to ${APP_NAME}`}
          </p>

          <Suspense fallback={<div>Loading...</div>}>
            <Card className="mx-auto max-w-sm w-full">
              <CardHeader>
                <CardTitle className="text-xl">Log in</CardTitle>
                <CardDescription>
                  Enter your information to login.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
