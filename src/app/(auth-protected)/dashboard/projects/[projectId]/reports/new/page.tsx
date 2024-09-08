import { Metadata } from "next";
import { APP_NAME } from "@/config/app.config";
import CreateReportForm from "./_components/CreateReportForm";
export const metadata: Metadata = {
  title: `Create Report | ${APP_NAME}`,
  description: `Create a new UI & UX analysis report in ${APP_NAME}`,
};
export default function CreateReportPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">Create Report</h1>
      </div>
      <CreateReportForm projectId={params.id} />
    </div>
  );
}
