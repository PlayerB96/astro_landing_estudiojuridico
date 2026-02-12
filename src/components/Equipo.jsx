import React from "react";

export default function Equipo() {
  return (
    <section id="equipo" className="max-w-6xl mx-auto my-10 px-4 sm:px-0 text-slate-900 dark:text-slate-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Nuestro Equipo</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center">
        <div className="text-center w-full md:max-w-xs">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Abogado 1" className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">Marilyn Rafael Andia</h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">Especialista en derecho civil</p>
        </div>
        <div className="text-center w-full md:max-w-xs">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Abogada 2" className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">Carlos Laza</h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">Derecho laboral y familiar</p>
        </div>
        <div className="text-center w-full md:max-w-xs">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Abogado 3" className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">Dr. Luis Martínez</h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">Defensa penal y litigios</p>
        </div>
      </div>
    </section>
  );
}
