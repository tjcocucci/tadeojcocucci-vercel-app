import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function YouTubeEmbed({ src }: { src: string }) {
  return (
    <div className="py-5 flex justify-center items-center">
      <iframe
        width="100%"
        height="300"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

const components = {
  Image: Image,
  CustomLink,
  YouTubeEmbed,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
