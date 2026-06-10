export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-20 sm:px-6"
    >
      <div className="animate-fade-in-up text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
          Vicente Milic Fuentes
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-lg lg:text-xl">
         Ingeniero Civil Inform&aacute;tico
        </p>
        <p className="mt-1 max-w-md text-xs text-gray-500 dark:text-gray-500 sm:text-sm">
          Desarrollador &middot; Analista de Datos 
        </p>
        <p className="mt-1 max-w-md text-[10px] text-gray-400 dark:text-gray-500 sm:text-xs">
          PHP &middot; Laravel &middot; React 
        </p>
        <p className="mt-1 max-w-md text-[10px] text-gray-400 dark:text-gray-500 sm:text-xs">
          SQL &middot; Python &middot; R
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          <a
            href="#projects"
            className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-indigo-700 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gray-300 px-5 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}
