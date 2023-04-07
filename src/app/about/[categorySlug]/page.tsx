import { categories } from "../categories";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = categories.find(
    (element) => element.slug === params.categorySlug
  );
  if (!category) {
    return <div>Not found</div>;
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>
    </div>
  );
}
