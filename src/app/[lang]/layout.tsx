import "./globals.css";
import clsx from "clsx";
import { Menu } from "@/components/menu";
import { NavBar } from "@/components/navbar";
import { MainCard } from "@/components/main-card";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/context/theme-provider";
import { i18n } from "@/../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({
  subsets: ["latin"],
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
    <html lang={params.lang} className={clsx(inter.className)}>
      <ThemeProvider>
        <LanguageProvider locale={params.lang}>
          <body className="text-gray-800 bg-neutral-200 dark:text-gray-400 dark:bg-[#1e1e1e]">
            <div className="max-w-4xl md:mx-auto w-full">

              {/* Top NavBar */}
              <div className="w-full">
                <NavBar />
              </div>
              
              {/* Menu and Main */}
              <div className="flex md:flex-row flex-col md:items-start mx-auto h-fit items-center">
                <div className="md:ml-8 md:w-fit w-full md:min-w-[20%]">
                  <Menu />
                </div>
                <div className="md:w-full w-11/12 mt-4">
                  <MainCard>{children}</MainCard>
                </div>
              </div>

            </div>
          </body>
        </LanguageProvider>
      </ThemeProvider>
    </html>
  );
}
