"use client";

import { TabGroup } from "@/components/tab-group";
import { allCards } from "contentlayer/generated";
import HomePage from "../page";
import { useLocale } from "@/context/language-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <div className="space-y-9">
      <HomePage />
      <div className="flex justify-between">
        <TabGroup
          path="/about"
          items={allCards
            .filter(
              (card) =>
                card.identifier.split("/")[0] === "about" &&
                card.locale === locale,
            )
            .map((card) => ({
              text: card.title,
              slug: card.identifier.split("/")[1],
            }))}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
