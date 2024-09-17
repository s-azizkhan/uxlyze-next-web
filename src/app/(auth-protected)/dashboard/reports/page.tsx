import { metaTitlePostFix } from "@/app/layout";
import AllReportsList from "./_components/AllReportsList";

export const metadata = {
  title: `My Reports by ${metaTitlePostFix}`,
  description:
    "View all reports, generate new report to view insight on website.",
};
export default function AllReportsPage() {
  return <AllReportsList />;
}
