import React from "react";

const items = [
  {
    title: "Experiencia y rigor jurídico",
    text: "Acompañamos cada caso con análisis profundo, estrategia clara y un enfoque preventivo que protege tus intereses desde el primer contacto.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
    alt: "Reunión legal",
  },
  {
    title: "Atención personalizada",
    text: "Tratamos cada situación con confidencialidad y cercanía. Nuestro equipo responde con rapidez y claridad para que tomes decisiones informadas.",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1200&q=80",
    alt: "Documentos jurídicos",
  },
  {
    title: "Resultados con visión estratégica",
    text: "Combinamos negociación y litigio con criterios técnicos sólidos, orientados a obtener soluciones eficaces y sostenibles.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Edificio corporativo",
  },
];

export default function SeccionesIntercaladas() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-10 sm:space-y-12">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
              {item.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
