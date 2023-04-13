import { TabGroup } from "@/components/tab-group";
import { allCards } from "contentlayer/generated";
import HomePage from "../page";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
    <HomePage />
      <div className="flex justify-between">
        <TabGroup
          path="/about"
          items={allCards.map((card) => ({
            text: card.title,
            slug: card._raw.flattenedPath,
          }))}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
