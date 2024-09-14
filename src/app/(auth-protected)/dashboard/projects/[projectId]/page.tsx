import { getProjectById } from "@/actions/project";
import { metaTitlePostFix } from "@/app/layout";
import ViewProject from "./_components/ViewProject";

// metadata
export const metadata = {
  title: "View Project | " + metaTitlePostFix,
  description: "View your project",
};

export default async function ViewProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  return <ViewProject projectId={params.projectId} />;
}
