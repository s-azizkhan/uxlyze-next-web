"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="animate-in fade-in zoom-in-75 transition-all duration-300 hover:animate-pulse"
    >
      <Sun02Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 animate-spin-slow" />
      <Moon02Icon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 animate-bounce-slow" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
