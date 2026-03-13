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
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center">
        <div className="text-center w-full md:max-w-xs">
          <img
            src="/assets/carlos.jpeg"
            alt="Abogada 2"
            className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Carlos Laza Valdivia
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Contador & Abogado
          </p>
        </div>
        <div className="text-center w-full md:max-w-xs">
          <img
            src="/assets/marilin.jpeg"
            alt="Abogado 1"
            className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Marilyn Pamela Rafael Andia
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Docente, Arbitro, Conciliadora & abogada
          </p>
          <p className="text-base sm:text-xs text-slate-600 dark:text-slate-300">
            estudiorafaelyabogados@gmail.com
          </p>
        </div>
        <div className="text-center w-full md:max-w-xs">
          <img
            src="/assets/jorse.jpeg"
            alt="Abogado 3"
            className="w-28 h-28 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
          />
          <h3 className="font-semibold mt-3 text-lg sm:text-xl">
            Jose Antonio Pagaza Guerra{" "}
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Abogado
          </p>
        </div>
      </div>
    </section>
  );
}
