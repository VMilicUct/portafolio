export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-5 py-5 text-center text-xs text-gray-500 dark:text-gray-500 sm:px-6 sm:py-6 sm:text-sm">
        &copy; {new Date().getFullYear()} Vicente Milic. Todos los derechos reservados.
      </div>
    </footer>
  )
}
