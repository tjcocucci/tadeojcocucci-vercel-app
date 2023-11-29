"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/theme-provider";
import SunIcon from "public/sun";
import MoonIcon from "public/moon";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <MoonIcon color="black" />
      ) : (
        <SunIcon color="white" />
      )}
    </button>
  );
}
