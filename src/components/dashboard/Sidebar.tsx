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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

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
    name: "Projects",
    icon: Package,
    href: "/dashboard/projects",
  },
  {
    name: "Reports",
    icon: LineChart,
    href: "/dashboard/reports",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col border-r bg-white dark:bg-gray-900 transition-all ease-in-out duration-300 sticky top-0 h-screen shadow-md">
      <div className="flex h-16 items-center justify-center border-b px-6 lg:h-[60px]">
        <Link href="/" className="flex items-center gap-2">
          <IconAnalyze className="h-8 w-8 text-primary" />
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">
            {APP_NAME}
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4">
        {sidebarItems.map((item) => (
          <TooltipProvider key={item.name}>
            <Tooltip key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 mb-2 hover:bg-gray-200 hover:text-primary dark:hover:bg-gray-800 dark:text-gray-900 dark:hover:text-primary transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary text-white dark:bg-primary-dark"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>

              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>

      <div className="px-4 py-6 mt-auto">
        <UpgradeCard />
      </div>
    </aside>
  );
}
