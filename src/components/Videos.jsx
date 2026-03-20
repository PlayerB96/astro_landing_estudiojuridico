export default function Videos() {
  return (
    <section
      id="videos"
      className="max-w-6xl mx-auto my-12 px-4 sm:px-0 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Conócenos
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 text-base sm:text-lg">
        Presentación de nuestro equipo y nuestras instalaciones.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
          <h3 className="font-semibold text-lg sm:text-xl text-amber-600 dark:text-amber-400">
            Nuestro Equipo
          </h3>
          <div
            className="overflow-hidden rounded-2xl shadow-xl bg-slate-900"
            style={{ width: "min(320px, 90vw)", aspectRatio: "9/16" }}
          >
            <video
              src="/assets/video1.mp4"
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
          <h3 className="font-semibold text-lg sm:text-xl text-amber-600 dark:text-amber-400">
            Nuestras Instalaciones
          </h3>
          <div
            className="overflow-hidden rounded-2xl shadow-xl bg-slate-900"
            style={{ width: "min(320px, 90vw)", aspectRatio: "9/16" }}
          >
            <video
              src="/assets/video2.mp4"
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
