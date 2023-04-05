import "./globals.css";
import clsx from "clsx";
import Sidebar from "../components/sidebar";
import { Source_Sans_Pro } from "next/font/google";

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
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        sourceSansPro.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
