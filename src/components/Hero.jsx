export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-b from-blue-900 to-blue-600 text-white text-center">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Estudio Jurídico" className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10 rounded-b-2xl" />
      <div className="py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">Estudio Jurídico</h1>
        <p className="text-lg md:text-xl mb-6">Tu solución legal, rápida y profesional</p>
        <a href="#contacto" className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 dark:bg-blue-200 dark:text-blue-900 dark:hover:bg-blue-100 transition">Solicita tu consulta</a>
      </div>
    </section>
  );
}
