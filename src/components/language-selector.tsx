import React, { useContext } from "react";

import { languageOptions } from "../languages";
import { LanguageContext } from "@/context/languageContext";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  console.log(userLanguage);

  // set selected language by calling context method
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    userLanguageChange(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id} className="text-black dark:text-white">
          {name}
        </option>
      ))}
    </select>
  );
}
