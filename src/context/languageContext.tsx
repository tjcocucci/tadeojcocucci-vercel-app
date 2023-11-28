"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "../../i18n-config";
import { i18n } from "../../i18n-config";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import redirectedPathName from "@/lib/redirectedPathName";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: null,
  dictionary: {},
  userLanguageChange: (selected: Locale) => Promise.resolve(),
});

// it provides the language context to app
export function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [userLanguage, setUserLanguage] = useState<Locale>(locale as Locale);
  const [dictionary, setDictionary] = useState<Record<string, string>>({});
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function fetchDictionary() {
      getDictionary(userLanguage)
        .then((dict) => dict && setDictionary(dict))
        .catch((err) => console.error(err));
    }
    fetchDictionary();
  }, [userLanguage]);

  const userLanguageChange = async (selected: Locale) => {
    // setUserLanguage(selected);
    // const dict = await getDictionary(selected);
    // setDictionary(dict || {});

    const pathSegments = pathName.split("/").filter((s) => s.length > 0);
    if (i18n.locales.includes(pathSegments[0] as Locale)) {
      pathSegments.shift();
    }

    router.replace(redirectedPathName(pathSegments.join("/"), selected));
  };

  const provider = {
    userLanguage,
    dictionary,
    userLanguageChange,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const languageContext = useContext(LanguageContext);
  return languageContext.userLanguage;
}

// get text according to id & current language
export function LocalizedText(tid: string) {
  const languageContext = useContext(LanguageContext);
  return (
    languageContext.dictionary[
      tid as keyof typeof languageContext.dictionary
    ] || tid
  );
}
