import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { APP_NAME } from "@/config/app.config";
import RegisterForm from "./Form";
import { metaTitlePostFix } from "@/app/layout";
import { Suspense } from "react";

// metadata
export const metadata = {
  title: "Register for " + metaTitlePostFix,
  description:
    "Be among the first to experience the advanced UI/UX analytics for your projects!",
};
export default function RegisterPage() {
  return (
    <section className="flex items-center justify-center lg:py-20 py-10">
      <div className="container px-4">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary  to-purple-600 text-transparent bg-clip-text">
              Register for {APP_NAME}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Be among the first to experience the advanced UI/UX analytics for
              your projects!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <RegisterForm />
            </Suspense>
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-gray-600">
          Beta access is limited. Register now to secure your spot!
        </p>
      </div>
    </section>
  );
}
