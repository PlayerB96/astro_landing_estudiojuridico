import React from "react";

export default function Equipo() {
  return (
    <section
      id="equipo"
      className="max-w-6xl mx-auto my-10 px-4 sm:px-0 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        <div className="text-center w-full">
          <img
            src="/assets/carlos.jpeg"
            alt="Carlos Laza Valdivia"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Carlos Laza Valdivia
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Docente
          </p>
        </div>
        <div className="text-center w-full">
          <img
            src="/assets/marilin.jpeg"
            alt="Marilyn Pamela Rafael Andia"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Marilyn Pamela Rafael Andia
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Abogada, Arbitro & Conciliadora
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            estudiorafaelyabogados@gmail.com
          </p>
        </div>
        <div className="text-center w-full">
          <img
            src="/assets/jorse.jpeg"
            alt="Jose Antonio Pagaza Guerra"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Jose Antonio Pagaza Guerra
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Abogado
          </p>
        </div>
        <div className="text-center w-full">
          <img
            src="/assets/jhonbrando.jpeg"
            alt="Jhon Brando Ari Anquise"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Dr. Jhon Brando Ari Anquise
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Abogado
          </p>
        </div>
      </div>
    </section>
  );
}
