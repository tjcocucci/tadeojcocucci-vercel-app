"use client";

import { notFound } from "next/navigation";
import { allCards } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Mdx } from "@/components/mdx";
import { useLocale } from "@/context/language-context";

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
      <h1 className="text-xl font-medium text-white-400/80">{cv.title}</h1>
      <p className="text-xl font-small text-gray-400/80">
        Última actualización {format(parseISO(date), "d MMM, y")}
      </p>
      <Mdx code={cv.body.code} />
    </div>
  );
}
