"use client";

import { contentItems, type Item } from "../lib/content";
import { useSelectedLayoutSegments } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { LocalizedText as t } from "@/context/language-context";
import LocalizedLink from "./localized-link";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="p-4 w-1/3 ">
      {/* Menu items */}
      <nav className="space-y-6 px-2 py-5">
        {contentItems.map((section) => {
          return (
            <div key={section.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200">
                <div>{t(section.name)}</div>{" "}
              </div>

              <div className="space-y-1">
                {section.items.map((item) => (
                  <GlobalNavItem key={item.slug} item={item} close={close} />
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segments = useSelectedLayoutSegments();
  const isActive = segments.join('/').includes(item.slug);

  return (
    <LocalizedLink
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-300 text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white italic": isActive,
        },
      )}
    >
      {isActive? "► " + t(item.name): t(item.name)}
    </LocalizedLink>
  );
}
