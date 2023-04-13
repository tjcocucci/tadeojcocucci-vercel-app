import { notFound } from "next/navigation";
import { allCVs } from "contentlayer/generated";
import { format, parseISO } from 'date-fns';
import { Mdx } from "../../components/mdx";

export default async function Page() {
  const cv = allCVs[0];
  if (!cv) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{cv.title}</h1>
      <p className="text-xl font-medium text-gray-400/80">
        Última actualización {format(parseISO(cv.date), "d MMM, y")}
      </p>
      <Mdx code={cv.body.code} />
    </div>
  );
}
