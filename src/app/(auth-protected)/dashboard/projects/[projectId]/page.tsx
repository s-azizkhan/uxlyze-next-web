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
  const project = await getProjectById(params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ViewProject project={project} />;
}
