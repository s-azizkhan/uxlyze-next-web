import WaitListForm from "@/components/shared/wait-list-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { APP_NAME } from "@/config/app.config";

export default function WaitlistPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container px-4">
        <Card className="mx-auto max-w-md w-full shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary  to-purple-600 text-transparent bg-clip-text">
              Join the {APP_NAME} Waitlist
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Be among the first to experience our revolutionary platform!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WaitListForm />
          </CardContent>
        </Card>
        <p className="text-center mt-8 text-gray-600">
          Limited spots available. Sign up now to secure your place!
        </p>
      </div>
    </section>
  );
}
