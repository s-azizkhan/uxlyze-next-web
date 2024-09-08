"use client";

import DashboardSidebar from "./_components/Sidebar";
import DashboardNavbar from "./_components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check if user is logged in
  const user = useSession();
  if (user.status === "unauthenticated") {
    // TODO: Redirect to login page
    // signIn();
  }
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />

        <div className="flex flex-col">
          <DashboardNavbar />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </>
  );
}
