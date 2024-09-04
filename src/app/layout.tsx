import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { Providers } from "../../components/Providers";
import { APP_NAME } from "@/config/app.config";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${APP_NAME} | Extend your hospitality with ${APP_NAME}`,
  description: `Extend your hospitality with ${APP_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-none">
      <Providers>
        <body className={`${bricolage.className}`}>{children}</body>
      </Providers>
    </html>
  );
}
