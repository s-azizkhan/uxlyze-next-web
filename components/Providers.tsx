"use client";

import { ThemeProvider } from "next-themes";
import SessionWrapper from "./SessionWrapper";
import { Toaster } from "sonner";
import { GoogleTagManager } from "@next/third-parties/google";

const gtmId = process.env.NEXT_PUBLIC_GA_ID as string;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <html lang="en">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" closeButton richColors />
          {children}
        </ThemeProvider>
      </html>
    </SessionWrapper>
  );
}
