import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ForgotPasswordForm from "./Form";
import { APP_NAME } from "@/config/app.config";

export default function ForgotPasswordPage() {
  return (
    <>
      <section className="pb-32 pt-16">
        <div className="container">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold inline-flex justify-center">
              {`Welcome to ${APP_NAME}`}
            </p>

            <Card className="mx-auto max-w-sm w-full">
              <CardHeader>
                <CardTitle className="text-xl">Reset Password</CardTitle>
                <CardDescription>
                  Enter your email to reset your password.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ForgotPasswordForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
