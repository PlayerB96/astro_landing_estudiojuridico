import React from "react";
import landing from "../data/landing.json";

export default function Contacto() {
  return (
    <section id="contacto" className="max-w-5xl mx-auto my-10 bg-slate-50 dark:bg-slate-900 rounded-xl shadow p-6 sm:p-8 border border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">{landing.contacto.titulo}</h2>
      <form name="contacto" netlify className="flex flex-col gap-4">
        <input type="text" name="nombre" placeholder={landing.contacto.placeholderNombre} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <input type="email" name="email" placeholder={landing.contacto.placeholderEmail} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <textarea name="mensaje" placeholder={landing.contacto.placeholderMensaje} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded min-h-[120px] bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <button type="submit" className="bg-slate-900 text-white font-semibold py-3 text-base sm:text-lg rounded hover:bg-slate-800 dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400 transition">{landing.contacto.boton}</button>
      </form>
      <div className="mt-8 text-center">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Oficina" className="w-full max-w-md mx-auto rounded-lg shadow" />
      </div>
    </section>
  );
}
