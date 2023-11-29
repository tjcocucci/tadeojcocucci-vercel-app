"use client";

import type { Item } from "./tab-group";
import clsx from "clsx";
import LocailzedLink from "./localized-link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment();
  const href = item.slug ? path + "/" + item.slug : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug;

  return (
    <LocailzedLink
      href={href}
      className={clsx("rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-500 dark:text-gray-200", {
        "bg-gray-700 text-gray-100  hover:text-white":
          !isActive,
        "border-2 border-gray-200": isActive,
      })}
    >
      {item.text}
    </LocailzedLink>
  );
};
