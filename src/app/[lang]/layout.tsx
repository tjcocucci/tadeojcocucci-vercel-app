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
  console.log("i18n.locales", i18n.locales);
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
          <body className="text-gray-800 bg-white dark:text-gray-400 dark:bg-[#1e1e1e]">
            <div className="w-2/3 mx-auto">
              <NavBar />
              <div className="flex flex-row items-start mx-auto h-screen">
                <Menu />
                <div className="w-2/3">
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
