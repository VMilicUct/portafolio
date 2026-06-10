const projects = [
  {
    title: 'SGQA - Sistema de Gestión de Calidad',
    description:
      'Prototipo web para la digitalización de procesos de aseguramiento de calidad en la Dirección de Informática de la Universidad Católica de Temuco. Incluye levantamiento de procesos, estructuración de datos y mejora de flujos de información.',
    tech: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/tuusuario/sgqa',
    demo: null,
  },
  {
    title: 'Análisis de Datos de E-commerce',
    description:
      'Análisis de dataset de ventas utilizando Python (pandas). Limpieza y transformación de datos, generación de KPIs (ingresos, ticket promedio, productos más vendidos) e identificación de patrones de compra.',
    tech: ['Python', 'Pandas', 'Jupyter'],
    github: 'https://github.com/tuusuario/ecommerce-analysis',
    demo: null,
  },
  {
    title: 'Automatización de Reportes',
    description:
      'Script en Python para automatizar la generación de reportes a partir de archivos CSV. Procesamiento y limpieza de datos, generación de indicadores clave y reducción del tiempo de análisis manual.',
    tech: ['Python', 'CSV', 'Pandas'],
    github: 'https://github.com/tuusuario/auto-reportes',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl lg:text-3xl">
        Proyectos
      </h2>
      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-gray-200 bg-white/90 p-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 sm:p-5"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:text-sm sm:leading-6">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 sm:px-2.5 sm:text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs sm:mt-4 sm:text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                C&oacute;digo
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
