"use client";

import { Button } from "@/components/ui/button";
import { Edit02Icon } from "hugeicons-react";
import CategoryManagement from "../_components/CategoryManagement"; // Add this import
import VenueDetailsCard from "../_components/VenueDetailsCard";

export default function CategoriesPage({ params }: { params: { id: string } }) {
  // Mock data (replace with actual data fetching logic)
  const venue = {
    id: "1",
    name: "Sunset Grill",
    type: "restaurant",
    address: "123 Main St, Anytown, USA",
    description: "A cozy restaurant with a beautiful view of the sunset.",
    image: "/images/placeholder.svg",
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-primary">{venue.name}</h1>
        <Button
          variant="outline"
          className="hover:bg-primary hover:text-white transition-colors"
        >
          <Edit02Icon className="mr-2 h-4 w-4" />
          Edit Venue
        </Button>
      </div>
      <VenueDetailsCard venue={venue} />
      <CategoryManagement venueId={venue.id} />
    </div>
  );
}
