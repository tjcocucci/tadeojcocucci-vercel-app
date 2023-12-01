"use client";

import { notFound } from "next/navigation";
import { allCards } from "contentlayer/generated";
import { Mdx } from "./mdx";
import { useLocale } from "@/context/language-context";

export function MdxCard({
  categorySlug,
  subject,
}: {
  categorySlug: string;
  subject: string;
}) {
  const locale = useLocale();
  const card = allCards.find(
    (card: any) =>
      card.identifier === subject + "/" + categorySlug &&
      card.locale === locale
  );
  if (!card) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium dark:text-gray-200 text-gray-800">{card.title}</h1>
      <br />
      <Mdx code={card.body.code} />
    </div>
  );
}
