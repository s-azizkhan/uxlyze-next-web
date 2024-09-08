"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft01Icon } from "hugeicons-react";

export default function PageHeading({
  title,
  backText,
}: {
  title: string;
  backText: string;
}) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>

      {backText && (
        <Button
          variant="ghost"
          className="hover:underline"
          onClick={() => router.back()}
        >
          <ArrowLeft01Icon className="w-4 h-4 mr-2" />
          {backText}
        </Button>
      )}
    </div>
  );
}
