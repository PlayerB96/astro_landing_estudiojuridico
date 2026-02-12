import React from "react";

export default function Equipo() {
  return (
    <section id="equipo" className="max-w-5xl mx-auto my-8 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">Nuestro Equipo</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="text-center max-w-xs">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Abogado 1" className="w-24 h-24 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-2">Dr. Juan Pérez</h3>
          <p className="text-gray-600 dark:text-gray-300">Especialista en derecho civil</p>
        </div>
        <div className="text-center max-w-xs">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Abogada 2" className="w-24 h-24 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-2">Dra. Ana Gómez</h3>
          <p className="text-gray-600 dark:text-gray-300">Derecho laboral y familiar</p>
        </div>
        <div className="text-center max-w-xs">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Abogado 3" className="w-24 h-24 rounded-full mx-auto object-cover" />
          <h3 className="font-semibold mt-2">Dr. Luis Martínez</h3>
          <p className="text-gray-600 dark:text-gray-300">Defensa penal y litigios</p>
        </div>
      </div>
    </section>
  );
}
