"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/theme-provider";
import SunIcon from "public/sun";
import MoonIcon from "public/moon";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="rounded-3xl p-2 hover:bg-neutral-300 hover:dark:bg-gray-800 fill-gray-800 dark:fill-gray-200"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
