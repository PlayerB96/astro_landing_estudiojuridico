import React from "react";
import landing from "../data/landing.json";

export default function Contacto() {
  const whatsappNumber = "51983108363";
  const emoji = {
    consulta: "\u{1F4E9}",
    nombre: "\u{1F464}",
    email: "\u{1F4E7}",
    telefono: "\u{1F4DE}",
    mensaje: "\u{1F4AC}",
    movil: "\u{1F4F1}",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();
    const mensaje = String(formData.get("mensaje") || "").trim();

    const whatsappMessage = [
      `${emoji.consulta} *Consulta desde la web del Estudio Juridico*`,
      "",
      "Estimados, buen dia.",
      "",
      "Me gustaria poder contactarme con el estudio juridico para realizar una consulta.",
      "",
      `${emoji.nombre} *Nombre:* ${nombre}`,
      `${emoji.email} *Email:* ${email}`,
      `${emoji.telefono} *Telefono:* ${telefono}`,
      `${emoji.mensaje} *Mensaje:* ${mensaje}`,
      "",
      `${emoji.movil} Quedo atento a su respuesta por este medio o al correo indicado.`,
      "",
      "Muchas gracias.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="max-w-5xl mx-auto my-10 bg-slate-50 dark:bg-slate-900 rounded-xl shadow p-6 sm:p-8 border border-slate-100 dark:border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">{landing.contacto.titulo}</h2>
      <form name="contacto" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder={landing.contacto.placeholderNombre} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <input type="email" name="email" placeholder={landing.contacto.placeholderEmail} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <input type="tel" name="telefono" placeholder={landing.contacto.placeholderTelefono} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <textarea name="mensaje" placeholder={landing.contacto.placeholderMensaje} required className="p-3 text-base sm:text-lg border border-slate-300 dark:border-slate-700 rounded min-h-[120px] bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400" />
        <button type="submit" className="bg-slate-900 text-white font-semibold py-3 text-base sm:text-lg rounded hover:bg-slate-800 dark:bg-amber-500 dark:text-slate-900 dark:hover:bg-amber-400 transition">{landing.contacto.boton}</button>
      </form>
      <div className="mt-8 text-center">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Oficina" className="w-full max-w-md mx-auto rounded-lg shadow" />
      </div>
    </section>
  );
}
