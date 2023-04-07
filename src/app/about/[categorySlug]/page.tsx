import { notFound } from 'next/navigation';
import { allCards } from "contentlayer/generated";
import { categories } from "../categories";
import { Mdx } from "../../../components/mdx";


export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const card = allCards.find(
    (card: any) => card._raw.flattenedPath === params.categorySlug
  );
  const category = categories.find(
    (element) => element.slug === params.categorySlug
  );
  if (!category || !card) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>
      <Mdx code={card.body.code} />
    </div>
  );
}
