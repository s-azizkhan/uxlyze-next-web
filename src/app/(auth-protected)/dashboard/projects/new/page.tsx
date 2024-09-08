import { Metadata } from "next";
import { APP_NAME } from "@/config/app.config";
import CreateProjectForm from "./_components/CreateProjectForm";

export const metadata: Metadata = {
  title: `Create Project | ${APP_NAME}`,
  description: `Create a new project for UI & UX analysis in ${APP_NAME}`,
};

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">Create Project</h1>
      </div>
      <CreateProjectForm />
    </div>
  );
}