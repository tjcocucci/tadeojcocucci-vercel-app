"use client";

import { contentItems, type Item } from "../lib/content";
import { useSelectedLayoutSegments } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { LocalizedText as t } from "@/context/language-context";
import LocalizedLink from "./localized-link";
import MenuIcon from "public/menu";
import CloseIcon from "public/close";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className="md:px-2 py-5 border-b md:border-b-0">
      <div className="md:hidden fill-gray-800 dark:fill-gray-200 px-6">
        {isOpen ? (
          <button onClick={() => setIsOpen(false)} className="w-6 h-6">
            <CloseIcon />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)} className="w-6 h-6">
            <MenuIcon />
          </button>
        )}
      </div>

      {/* <div className="hidden md:flex md:flex-col md:space-y-6"> */}
      <div
        className={clsx("md:flex md:flex-col md:space-y-6", {
          hidden: !isOpen,
          "flex flex-wrap": isOpen,
        })}
      >
        {contentItems.map((section) => {
          return (
            <div key={section.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200">
                <div>{t(section.name)}</div>{" "}
              </div>

              <div className="space-y-1">
                {section.items.map((item) => (
                  <GlobalNavItem key={item.slug} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function GlobalNavItem({ item }: { item: Item }) {
  const segments = useSelectedLayoutSegments();
  const isActive = segments.join("/").includes(item.slug);

  return (
    <LocalizedLink
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-300 text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          italic: isActive,
        },
      )}
    >
      {isActive ? "► " + t(item.name) : t(item.name)}
    </LocalizedLink>
  );
}
