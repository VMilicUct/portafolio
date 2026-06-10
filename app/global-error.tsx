'use client'

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-white p-6 dark:bg-gray-950">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
            Algo sali&oacute; mal
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ocurri&oacute; un error inesperado.
          </p>
          <button
            onClick={() => unstable_retry()}
            className="mt-6 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Intentar de nuevo
          </button>
        </div>
      </body>
    </html>
  )
}
