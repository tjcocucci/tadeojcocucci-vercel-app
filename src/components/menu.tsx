"use client";

import { contentItems, type Item } from "../lib/content";
import { Profile } from "./profile";
import { useSelectedLayoutSegment } from "next/navigation";
// import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from "clsx";
import { useState } from "react";
import LocaleSwitcher from "@/components/locale-switcher";
import { LocalizedText as t } from "@/context/languageContext";
import LocalizedLink from "./LocalizedLink";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="p-4 w-1/3 ">
      {/* Menu button when screen too narrow */}
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {/* {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )} */}
      </button>
      <div className="div"> {t("aboutMe")}</div>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-white dark:bg-black":
            isOpen,
          hidden: !isOpen,
        })}
      >
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
