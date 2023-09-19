import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import PortalMenu from "@/components/organisms/portal-menu";
import { Row } from "@/components/ui/layout";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppin.variable,
          inter.className,
          "bg-gray-100 dark:bg-gray-900"
        )}
      >
        <Row className="m-auto gap-4 max-w-7xl">
          <PortalMenu />
          {children}
        </Row>
      </body>
    </html>
  );
}
