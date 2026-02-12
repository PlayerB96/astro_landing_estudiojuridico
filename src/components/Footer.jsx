import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-blue-900 dark:text-blue-200">Estudio Jurídico</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Tu solución legal, rápida y profesional</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Inicio</a>
          <a href="#servicios" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Servicios</a>
          <a href="#equipo" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Equipo</a>
          <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contacto</a>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500">© {year} Estudio Jurídico. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
