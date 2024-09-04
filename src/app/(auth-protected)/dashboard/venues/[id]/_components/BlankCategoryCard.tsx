"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusSignIcon } from "hugeicons-react";

export default function BlankCategoryCard({
  onAddCategory,
}: {
  onAddCategory: () => void;
}) {
  return (
    <Card className="text-center mt-5 py-12 border-dashed border-gray-300">
      <CardContent>
        <h3 className="text-xl font-semibold mb-4">No categories yet</h3>
        <p className="text-gray-600 mb-6">
          Add categories to organize your menu items
        </p>
        <Button size="lg" className="rounded-xl" onClick={onAddCategory}>
          <PlusSignIcon className="mr-2 h-4 w-4" /> Add New Category
        </Button>
      </CardContent>
    </Card>
  );
}
