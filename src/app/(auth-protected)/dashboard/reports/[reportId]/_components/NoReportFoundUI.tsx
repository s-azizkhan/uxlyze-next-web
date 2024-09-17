import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NoReportFoundUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Report Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {
            "We couldn't find the report you're looking for. It may have been deleted or doesn't exist."
          }
        </p>
        <Button asChild>
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
