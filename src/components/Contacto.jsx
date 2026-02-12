import React from "react";
import landing from "../data/landing.json";

export default function Contacto() {
  return (
    <section id="contacto" className="max-w-4xl mx-auto my-8 bg-blue-50 dark:bg-gray-900 rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-6">{landing.contacto.titulo}</h2>
      <form name="contacto" netlify className="flex flex-col gap-4">
        <input type="text" name="nombre" placeholder={landing.contacto.placeholderNombre} required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400" />
        <input type="email" name="email" placeholder={landing.contacto.placeholderEmail} required className="p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400" />
        <textarea name="mensaje" placeholder={landing.contacto.placeholderMensaje} required className="p-3 border border-gray-300 dark:border-gray-700 rounded min-h-[100px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400" />
        <button type="submit" className="bg-blue-900 text-white font-semibold py-3 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition">{landing.contacto.boton}</button>
      </form>
      <div className="mt-8 text-center">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Oficina" className="w-full max-w-xs mx-auto rounded-lg shadow" />
      </div>
    </section>
  );
}
