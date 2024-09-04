import { APP_NAME } from "@/config/app.config";
import { Metadata } from "next";
import AddVenueForm from "./AddVenueForm";

export const metadata: Metadata = {
  title: `Add Venue | ${APP_NAME}`,
  description: `Add a new venue to ${APP_NAME}`,
};

export default function AddVenuePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold md:text-3xl">Create Venue</h1>
        </div>
        <AddVenueForm />
      </div>
    </>
  );
}
