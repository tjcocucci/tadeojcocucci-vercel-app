import React, { useContext, useEffect, useState} from "react";
import { LanguageContext } from "@/context/languageContext";
import { i18n, Locale } from "@/../i18n-config";

export default function LocaleSwitcher() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = i18n.locales.includes(e.target.value as Locale)
      ? e.target.value
      : i18n.defaultLocale;
      userLanguageChange(newLocale as Locale);
      };

  return (
    <div>
      <p>Locale switcher:</p>
      <select onChange={handleLanguageChange} value={userLanguage}>
        {Object.entries(i18n.locales).map(([id, name]) => (
          <option key={id} value={name} className="text-black dark:text-white">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
