"use client";
import Link from "next/link";
import { CircleUser, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { APP_NAME } from "@/config/app.config";
import { sidebarItems, UpgradeCard } from "./Sidebar";
import { signOut } from "next-auth/react";
import { MagicWand02Icon } from "hugeicons-react";
import { useState } from "react";
import CreateReportDialog from "@/app/(auth-protected)/dashboard/_components/CreateReportDialog";
import Image from "next/image";

export default function DashboardNavbar() {
  const myAccountItems = [
    {
      name: "Settings",
      href: "/dashboard/settings",
    },
    {
      name: "Support",
      href: "/dashboard/support",
    },
  ];

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image
                  src={"/images/uxlyze-only-logo.svg"}
                  alt="UXlyze logo"
                  loading="lazy"
                  width={50}
                  height={50}
                />
                {APP_NAME}
              </Link>

              {sidebarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <UpgradeCard />
            </div>
          </SheetContent>
        </Sheet>

        {/* TODO: Add search functionality */}
        <div className="w-full flex-1 opacity-0">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search reports..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>

        <div className="w-full flex justify-end">
          <div className="relative">
            <Button
              onClick={() => setIsCreateDialogOpen(true)}
              className="w-full sm:w-auto rounded-xl"
              size="lg"
            >
              <MagicWand02Icon className="mr-2 h-5 w-5" />
              Generate Report
            </Button>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {myAccountItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <DropdownMenuItem className="cursor-pointer" key={item.name}>
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mode Toggle */}
        <ModeToggle />
      </header>

      <CreateReportDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
    </>
  );
}
