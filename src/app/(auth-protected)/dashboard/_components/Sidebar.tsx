"use client";

import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/config/app.config";
import { Tap01Icon } from "hugeicons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconAnalyze, IconGrowth } from "@tabler/icons-react";

export function UpgradeCard() {
  return (
    <Card x-chunk="dashboard-02-chunk-0" className="bg-white">
      <CardHeader className="p-3 text-center">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Upgrade to Pro
        </CardTitle>
        <CardDescription className="text-gray-600">
          Unlock all features & enjoy priority support.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Button
          size="lg"
          className="hover:scale-105 transition-transform duration-300 ease-in-out w-full rounded-xl bg-gradient-to-r to-purple-500 from-primary hover:shadow-lg"
        >
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
}
export const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    name: "Reports",
    icon: Package,
    href: "/dashboard/venues",
  },
  {
    name: "Analytics",
    icon: LineChart,
    href: "/dashboard/analytics",
  },
];
export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden md:flex flex-col border-r bg-muted/40 transition-all ease-in-out duration-300">
        {/* Top Section */}
        <div className="flex h-16 items-center justify-between border-b px-6 lg:h-[70px] lg:px-8 shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <IconAnalyze className="h-8 w-8 text-primary animate-bounce-slow text-violet-500" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">
              {APP_NAME}
            </span>
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 py-6">
          <nav className="grid grid-flow-row gap-3 px-4 text-base font-medium">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "border-b-2 border-b-violet-300 flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-gradient-to-r from-primary/20 to-primary/40 hover:shadow-lg  hover:text-primary hover:border-none transition-all duration-300 ease-in-out",
                  pathname === item.href
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white hover:text-white shadow-lg border-l-4 border-l-violet-500"
                    : "text-muted-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform duration-300 dark:text-gray-400",
                    pathname === item.href
                      ? "scale-125 dark:text-gray-700"
                      : "scale-100"
                  )}
                />
                <span
                  className={cn(
                    "dark:text-white",
                    pathname === item.href
                      ? "dark:text-black"
                      : "dark:text-gray-300"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Upgrade Card */}
        <div className="px-6 py-4 mt-auto  rounded-xl shadow-lg">
          <UpgradeCard />
        </div>
      </div>
    </>
  );
}
