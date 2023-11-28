"use client";

import { contentItems, type Item } from "../lib/content";
import { Profile } from "./profile";
import { useSelectedLayoutSegment } from "next/navigation";
// import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from "clsx";
import { useState } from "react";
import LocaleSwitcher from "@/components/locale-switcher";
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
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
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
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <LocalizedLink
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        },
      )}
    >
      {t(item.name)}
    </LocalizedLink>
  );
}
