"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-context";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-2.5 p-2.5"
    >
      <span>
        {theme === "light" ? (
          <Moon strokeWidth={1} size={22} />
        ) : (
          <Sun strokeWidth={1} size={22} />
        )}
      </span>
      <p> Go {theme === "light" ? "dark" : "light"}</p>
    </button>
  );
};

export default ThemeSwitcher;
