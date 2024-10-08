import { metaTitlePostFix } from "@/app/layout";
import ViewReportResult from "./_components/ViewReportResult";

export const metadata = {
  title: "View Report | by " + metaTitlePostFix,
};

export default function ViewSingleReportPage({
  params,
}: {
  params: { reportId: string };
}) {
  return <ViewReportResult reportId={params.reportId} />;
}
