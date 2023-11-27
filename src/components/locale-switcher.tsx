'use client'
import React, { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
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
      {Object.entries(i18n.locales).map(([id, name]) => (
        <button
          className={clsx("rounded-lg px-3 py-1 text-sm font-medium", {
            "bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white":
              name !== userLanguage,
            "bg-vercel-blue text-white": name === userLanguage,
          })}
          key={id}
          onClick={() => handleLanguageChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
