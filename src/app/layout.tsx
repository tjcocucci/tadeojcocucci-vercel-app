import "./globals.css";
import clsx from "clsx";
import { GlobalNav } from "../components/global-nav";
import { Source_Sans_Pro } from "next/font/google";
import { MainCard } from "@/components/main-card";

const sourceSansPro = Source_Sans_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  display: "swap",
});

export const metadata = {
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Tadeo" }],
  colorScheme: "dark",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-AR": "/es-AR",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <GlobalNav />
        <MainCard>{children}</MainCard>
      </body>
    </html>
  );
}
