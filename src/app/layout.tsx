import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { Providers } from "../../components/Providers";
import { APP_NAME } from "@/config/app.config";
import SubmitFeedback from "@/components/shared/SubmitFeedback";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const metaTitlePostFix = `${APP_NAME} | Bridging the gap between Design and Reality`;

export const metadata: Metadata = {
  title: metaTitlePostFix,
  description: `Bridging the gap between Design and Reality`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <body className={`${bricolage.className}`}>
        {children}
        <SubmitFeedback />
      </body>
    </Providers>
  );
}
