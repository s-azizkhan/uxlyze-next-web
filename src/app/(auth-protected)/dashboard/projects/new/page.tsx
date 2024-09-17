import { Metadata } from "next";
import { APP_NAME } from "@/config/app.config";
import CreateProjectForm from "./_components/CreateProjectForm";
import PageHeading from "@/components/dashboard/PageHeading";

export const metadata: Metadata = {
  title: `Create Project | ${APP_NAME}`,
  description: `Create a new project for UI & UX analysis in ${APP_NAME}`,
};

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto px-2 lg:px-4 py-8">
      <PageHeading
        title="Create Project"
        description="Create a new project for UI & UX analysis"
        backText="Back"
      />
      <CreateProjectForm />
    </div>
  );
}