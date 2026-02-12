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
      className="ml-4 px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition flex items-center gap-2 hover:bg-amber-100 dark:hover:bg-slate-700"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      type="button"
    >
      {dark ? <Moon size={20} /> : <Sun size={20} />}
      {dark ? "Dark" : "Light"}
    </button>
  );
}
