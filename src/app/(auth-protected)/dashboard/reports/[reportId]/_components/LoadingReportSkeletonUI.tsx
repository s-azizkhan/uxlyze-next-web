"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingReportSkeletonUI() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  );
}
