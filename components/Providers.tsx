"use client";

import { ThemeProvider } from "next-themes";
import SessionWrapper from "./SessionWrapper";
import { Toaster } from "sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import mixpanel from "mixpanel-browser";

const gtmId = process.env.NEXT_PUBLIC_GA_ID as string;

export function Providers({ children }: { children: React.ReactNode }) {
  const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string;

  if (mixpanelToken) {
    mixpanel.init(mixpanelToken, {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
  }

  return (
    <SessionWrapper>
      <html lang="en" className="scrollbar-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" closeButton richColors />
          {process.env.NODE_ENV === "production" &&
            process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
              <Script id="clarity-script">
                {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
              </Script>
            )}
          {children}
        </ThemeProvider>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </html>
    </SessionWrapper>
  );
}
