"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

import { getDictionary } from "@/lib/get-dictionary";
import type { Locale } from "../../i18n-config";
import { i18n } from "../../i18n-config";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const defaultLanguage = i18n.defaultLocale as Locale;

// create the language context with default selected language
// export const LanguageContext = createContext(null);
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
  }, []);

  const userLanguageChange = async (selected: Locale) => {
    const redirectedPathName = (locale: string) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };
    router.push(redirectedPathName(selected));
    setUserLanguage(selected);
    getDictionary(selected)
      .then((dict) => dict && setDictionary(dict))
      .catch((err) => console.error(err));
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

// get text according to id & current language
export function Text(tid: string) {
  const languageContext = useContext(LanguageContext);
  return (
    languageContext.dictionary[
      tid as keyof typeof languageContext.dictionary
    ] || tid
  );
}
