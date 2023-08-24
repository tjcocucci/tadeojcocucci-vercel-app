import "./globals.css";
import clsx from "clsx";
import { GlobalNav } from "@/components/global-nav";
import { Source_Sans_Pro } from "next/font/google";
import { MainCard } from "@/components/main-card";
import { LanguageProvider } from "@/context/languageContext";
import { i18n } from "@/../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const sourceSansPro = Source_Sans_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  display: "swap",
});

// export const metadata = {
//   referrer: "origin-when-cross-origin",
//   authors: [{ name: "Tadeo" }],
//   colorScheme: "dark",
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//       "es-AR": "/es-AR",
//     },
//   },
// };

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      className={clsx(
        "text-gray-800 bg-white dark:text-gray-400 dark:bg-[#1e1e1e]",
        sourceSansPro.variable,
      )}
    >
      <body className="antialiased mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <LanguageProvider locale={params.lang}>
          <GlobalNav />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            <MainCard>{children}</MainCard>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
