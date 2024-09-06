import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { Providers } from "../../components/Providers";
import { APP_NAME } from "@/config/app.config";
import Script from "next/script";
import SubmitFeedback from "@/components/shared/SubmitFeedback";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${APP_NAME} | Bridging the gap between Design and Reality`,
  description: `Bridging the gap between Design and Reality`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-none">
      {process.env.NODE_ENV === "production" && (
        <Script id="microsoft-clarity-analytics">
          {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nxzj4u1l0r");
              `}
        </Script>
      )}
      <Providers>
        <body className={`${bricolage.className}`}>
          {children}
          <SubmitFeedback />
        </body>
      </Providers>
    </html>
  );
}
