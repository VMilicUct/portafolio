const skills = [
  { name: 'SQL', level: 'Intermedio' },
  { name: 'Python', level: 'Intermedio' },
  { name: 'R', level: 'Intermedio' },
  { name: 'Power BI', level: 'Intermedio' },
  { name: 'Tableau', level: 'Básico' },
  { name: 'PHP', level: 'Intermedio' },
  { name: 'Laravel', level: 'Intermedio' },
  { name: 'React', level: 'Básico - Intermedio' },
  { name: 'TypeScript', level: 'Intermedio' },
  { name: 'Bootstrap', level: 'Intermedio' },
  { name: 'Tailwind CSS', level: 'Intermedio' },
  { name: 'Excel', level: 'Avanzado' },
  { name: 'Git', level: 'Intermedio' },
  { name: 'Scrum / Kanban', level: 'Intermedio' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl lg:text-3xl">
        Habilidades
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3 md:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2.5 text-center backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 sm:px-4 sm:py-3"
          >
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100 sm:text-sm">
              {skill.name}
            </span>
            <span className="mt-0.5 block text-[10px] text-gray-500 dark:text-gray-500 sm:text-xs">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
