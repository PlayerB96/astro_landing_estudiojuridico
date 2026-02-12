import React from "react";
import landing from "../data/landing.json";

export default function Servicios() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto my-8 bg-white dark:bg-gray-900 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Servicios</h2>
      <div className="flex flex-col gap-4">
        {landing.servicios.map((servicio, i) => (
          <div key={i} className="flex items-center gap-4 bg-blue-50 dark:bg-gray-800 rounded p-4">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=100&q=80" alt="Servicio" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <strong className="block text-blue-900 dark:text-blue-200">{servicio.nombre}</strong>
              <span className="text-gray-700 dark:text-gray-300">{servicio.detalle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
