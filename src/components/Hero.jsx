export default function Hero() {
  return (
    <section
      className="relative min-h-[360px] md:min-h-[420px] bg-center bg-cover text-white md:bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80)",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-slate-200/90">Estudio jurídico</span>
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">Defensa legal sólida y estratégica</h1>
        <p className="text-lg sm:text-lg md:text-xl text-slate-200 mb-8">
          Soluciones confiables, atención cercana y resultados orientados a tu tranquilidad.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-amber-500 text-slate-900 font-semibold px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base rounded shadow hover:bg-amber-400 transition"
        >
          Agenda una consulta
        </a>
      </div>
    </section>
  );
}
