"use client";

import React from "react";
import Link from "next/link";
import redirectedPathName from "@/lib/redirectedPathName";
import { useLocale } from "@/context/languageContext";

export default function LocailzedLink({ href, children, ...props }) {
  const locale = useLocale();
  const localizedHref = redirectedPathName(href as string, locale);

  return (
    <Link {...props} href={localizedHref} title={localizedHref}>
      {children}
    </Link>
  );
}
