import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  useEffect(() => {
    console.log("ThemeToggle montado");
  }, []);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    console.log("Tema cambiado:", dark ? "oscuro" : "claro");
    if (dark) {
      document.documentElement.classList.add("dark");
      console.log("Modo oscuro activado", document.documentElement.classList);
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Modo claro activado", document.documentElement.classList);
    }
  }, [dark]);

  return (
    <button
      className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 transition flex items-center gap-2"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      type="button"
    >
      {dark ? <Moon size={20} /> : <Sun size={20} />}
      {dark ? "Dark" : "Light"}
    </button>
  );
}
