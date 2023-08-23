'use client';

import React, { useState, createContext, useContext } from "react";

import { dictionaryList } from "../languages";

const defaultLanguage = "en";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: defaultLanguage,
  dictionary: dictionaryList[defaultLanguage],
  userLanguageChange: (selected: string) => {},
});

// it provides the language context to app
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [userLanguage, setUserLanguage] = useState(defaultLanguage);
  const [dictionary, setDictionary] = useState(dictionaryList[defaultLanguage]);

  const userLanguageChange = (selected: string) => {
    // console.log(selected);
    setUserLanguage(selected);
    setDictionary(dictionaryList[selected as keyof typeof dictionaryList]);
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
export function Text({ tid }: { tid: string }) {
  const languageContext = useContext(LanguageContext);

  return (
    languageContext.dictionary[
      tid as keyof typeof languageContext.dictionary
    ] || tid
  );
}
