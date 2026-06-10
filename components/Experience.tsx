const experience = [
  {
    role: 'Práctica Profesional / Proyecto de Tesis',
    company: 'Dirección de Informática – Universidad Católica de Temuco',
    period: '2025',
    description: [
      'Desarrollo de prototipo web (SGQA) para la digitalización de procesos de aseguramiento de calidad',
      'Levantamiento y análisis de procesos internos, identificando oportunidades de mejora',
      'Estructuración y organización de datos para facilitar su análisis y trazabilidad',
      'Implementación de solución utilizando Laravel, PHP y Bootstrap',
      'Apoyo en la mejora de flujos de información, optimizando la organización y acceso a datos',
      'Colaboración con equipos internos para validar requerimientos y funcionalidades',
    ],
  },
  {
    role: 'Práctica Inicial – Desarrollo Web',
    company: 'Constructora Santa Dominga Ltda.',
    period: '2019',
    description: [
      'Desarrollo de sitio web corporativo utilizando WordPress',
      'Personalización de plantillas y estructura del sitio según requerimientos del cliente',
      'Optimización de contenido y estructura para mejorar la presentación de la empresa',
      'Apoyo en la digitalización de información institucional',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl lg:text-3xl">
        Experiencia
      </h2>
      <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
        {experience.map((item) => (
          <div key={item.company}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                {item.role}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 sm:text-sm sm:whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 sm:text-sm">
              {item.company}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:mt-3 sm:space-y-1.5 sm:pl-5 sm:text-sm sm:leading-6">
              {item.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
