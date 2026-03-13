import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">
            Ubicados en:
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Av. Carlos Izaguirre 170 Oficina 302, Independencia
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <a
            href="#inicio"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            Servicios
          </a>
          <a
            href="#equipo"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            Equipo
          </a>
          <a
            href="#contacto"
            className="hover:text-amber-600 dark:hover:text-amber-400 transition"
          >
            Contacto
          </a>
        </div>
        <p className="text-[0.7rem] sm:text-xs text-slate-500 dark:text-slate-500">
          © {year} Estudio juridico Rafael & Abogados Asociados . Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
