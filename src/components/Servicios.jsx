import React from "react";
import landing from "../data/landing.json";

export default function Servicios() {
  const burbujas = ["Penal", "Civil", "Administrativo", "Laboral", "Contable"];
  const serviciosPenales = [
    "Robo agravado",
    "Hurto",
    "Fraude",
    "Homicidio culposo",
    "Homicidio doloso",
    "Violación",
    "Lesiones",
    "Lavado de activos",
  ];
  const serviciosLaborales = [
    "Despidos injustificados",
    "Falta de pago de salarios/horas extras",
    "Accidente de trabajo",
    "Acoso y discriminación",
  ];
  const serviciosAdministrativos = [
    "Obtención de licencias de construcción",
    "Sanciones de tránsito",
    "Contrataciones públicas",
    "Procedimientos tributarios",
    "Reclamaciones de responsabilidad patrimonial contra el Estado",
  ];

  return (
    <section id="servicios" className="max-w-7xl mx-auto my-10 bg-white dark:bg-slate-900 rounded-xl shadow p-6 sm:p-8 border border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">Servicios</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        {burbujas.map((nombre, i) => (
          <div key={i} className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/70 rounded-lg p-5 border border-slate-100 dark:border-slate-700">
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/original/png/4363.png" alt="Balanza de justicia" className="w-16 h-16 sm:w-16 sm:h-16 rounded-full object-cover" />
            <div>
              <strong className="block text-lg sm:text-xl md:text-base text-slate-900 dark:text-slate-100">{nombre}</strong>
              {nombre === "Penal" && (
                <ul className="mt-2 space-y-1 text-base sm:text-lg md:text-sm text-slate-600 dark:text-slate-300">
                  {serviciosPenales.map((servicio, index) => (
                    <li key={index}>• {servicio}</li>
                  ))}
                </ul>
              )}
              {nombre === "Civil" && (
                <ul className="mt-2 space-y-1 text-base sm:text-lg md:text-sm text-slate-600 dark:text-slate-300">
                  {landing.servicios.map((servicio, index) => (
                    <li key={index}>• {servicio.nombre}</li>
                  ))}
                </ul>
              )}
              {nombre === "Laboral" && (
                <ul className="mt-2 space-y-1 text-base sm:text-lg md:text-sm text-slate-600 dark:text-slate-300">
                  {serviciosLaborales.map((servicio, index) => (
                    <li key={index}>• {servicio}</li>
                  ))}
                </ul>
              )}
              {nombre === "Administrativo" && (
                <ul className="mt-2 space-y-1 text-base sm:text-lg md:text-sm text-slate-600 dark:text-slate-300">
                  {serviciosAdministrativos.map((servicio, index) => (
                    <li key={index}>• {servicio}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
