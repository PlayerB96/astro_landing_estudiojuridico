import React from "react";
import landing from "../data/landing.json";

export default function Servicios() {
  return (
    <section id="servicios" className="max-w-7xl mx-auto my-10 bg-white dark:bg-slate-900 rounded-xl shadow p-6 sm:p-8 border border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Servicios</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        {landing.servicios.map((servicio, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/70 rounded-lg p-5 border border-slate-100 dark:border-slate-700">
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/original/png/4363.png" alt="Balanza de justicia" className="w-16 h-16 sm:w-16 sm:h-16 rounded-full object-cover" />
            <div>
              <strong className="block text-lg sm:text-xl md:text-base text-slate-900 dark:text-slate-100">{servicio.nombre}</strong>
              <span className="text-base sm:text-lg md:text-sm text-slate-600 dark:text-slate-300">{servicio.detalle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
