import { TabGroup } from "@/components/tab-group";
import { categories } from "./categories";
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
          items={categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          }))}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
