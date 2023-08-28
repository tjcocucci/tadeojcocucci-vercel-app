import { MdxCard } from "@/components/mdx-card";

export default function Page({ params }: { params: { categorySlug: string } }) {
  return <MdxCard categorySlug={params.categorySlug} subject={"portfolio"} />;
}
