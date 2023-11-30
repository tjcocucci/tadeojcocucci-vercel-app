"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/context/language-context";
import { i18n, Locale } from "@/../i18n-config";
import clsx from "clsx";

export default function LocaleSwitcher() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (name) => {
    const newLocale = i18n.locales.includes(name as Locale)
      ? name
      : i18n.defaultLocale;
    userLanguageChange(newLocale as Locale);
  };

  return (
    <div className="flex flex-row space-x-2">
      {Object.entries(i18n.locales).map(([id, name], index) => (
        <>
          <button
            className={clsx(
              "rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-300 text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 fill-gray-800 dark:fill-gray-200",
              {
                "text-gray-400 hover:bg-gray-800": name !== userLanguage,
                "border-2 dark:border-gray-200 border-neutral-400": name === userLanguage,
              },
            )}
            key={id}
            onClick={() => handleLanguageChange(name)}
          >
            {name}
          </button>
          <span key={id} className="text-gray-400 py-2 font-extrabold">
            {index !== i18n.locales.length - 1 ? " | " : ""}
          </span>
        </>
      ))}
    </div>
  );
}
