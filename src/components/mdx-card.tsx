import { notFound } from "next/navigation";
import { allCards } from "contentlayer/generated";
import { Mdx } from "./mdx";

export function MdxCard({categorySlug, subject} : {categorySlug: string, subject: string}) {
  const card = allCards.find(
    (card: any) =>
      card.subject === subject &&
      card._raw.flattenedPath === categorySlug
  );
  if (!card) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium text-gray-400/80">{card.title}</h1>
      <br />
      <Mdx code={card.body.code} />
    </div>
  );
}
