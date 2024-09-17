import { Metadata } from "next";
import { APP_NAME } from "@/config/app.config";
import CreateReportForm from "./_components/CreateReportForm";
import PageHeading from "@/components/dashboard/PageHeading";
import { metaTitlePostFix } from "@/app/layout";
export const metadata: Metadata = {
  title: `Generate Report | ${metaTitlePostFix}`,
  description: `Create a new UI & UX analysis report in ${APP_NAME}`,
};
export default function CreateReportPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeading title="Generate Report" backText="Back to Project" />
      <CreateReportForm projectId={params.projectId} />
    </div>
  );
}
