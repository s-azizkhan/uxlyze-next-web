import { Toaster } from "@/components/ui/toaster";
import DashboardSidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
