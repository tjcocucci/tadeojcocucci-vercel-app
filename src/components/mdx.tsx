import { ConfigNoDefaultExportError } from "contentlayer/core";
import { useMDXComponent } from "next-contentlayer/hooks";

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  console.log(code)
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component />
    </article>
  );
}
