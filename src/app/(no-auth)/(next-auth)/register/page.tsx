import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "./Form";
import { APP_NAME } from "@/config/app.config";

export default function RegisterPage() {
  return (
    <section className="pb-32 pt-16">
      <div className="container">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold inline-flex justify-center">
            Welcome to {APP_NAME}
          </p>
          <Card className="mx-auto max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Registration</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
