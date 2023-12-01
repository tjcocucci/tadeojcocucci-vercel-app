"use client";

import { notFound } from "next/navigation";
import { allCards } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx";
import { useLocale } from "@/context/language-context";
import { LocalizedText as t } from "@/context/language-context";

export default function Page() {
  const locale = useLocale();
  const cv = allCards.find(
    (card: any) => card.identifier === "about/cv" && card.locale === locale
    );
  if (!cv) {
    notFound();
  }
  let date = cv.date || "Unknown";
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium dark:text-gray-200 text-gray-800">{cv.title}</h1>
      <p className="text-xs text-gray-400/80">
        {t("lastUpdate")} {format(parseISO(date), "d MMM, y")}
      </p>
      <hr className="border-gray-700 dark:border-gray-200" />
      <br />
      <Mdx code={cv.body.code} />
    </div>
  );
}
