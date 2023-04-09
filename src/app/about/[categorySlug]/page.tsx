import { notFound } from 'next/navigation';
import { allCards } from "contentlayer/generated";
import { Mdx } from "../../../components/mdx";


export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const card = allCards.find(
    (card: any) => card._raw.flattenedPath === params.categorySlug
  );
  if (!card) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{card.title}</h1>
      <Mdx code={card.body.code} />
    </div>
  );
}
