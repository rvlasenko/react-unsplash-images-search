import { useSearchContext } from "../context/SearchContext"
import { useImages } from "../hooks/useImages"

const Gallery = () => {
  const { data, error, isLoading, isError } = useImages()
  const { query } = useSearchContext()

  if (isLoading) {
    return (
      <div
        className="flex justify-center mt-16"
        role="status"
        aria-label="Loading images"
      >
        <div className="w-12 h-12 rounded-full border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-600 dark:border-t-zinc-300 animate-spin" />
      </div>
    )
  }

  if (isError) {
    return (
      <p className="text-center mt-16 text-zinc-500 dark:text-zinc-400">
        {error.message || "Something went wrong."}
      </p>
    )
  }

  if (!data?.results?.length) {
    return (
      <p className="text-center mt-16 text-zinc-500 dark:text-zinc-400">
        No results found.
      </p>
    )
  }

  return (
    <>
      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 text-center">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {data.total}
        </span>{" "}
        results for &lsquo;
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {query}
        </span>
        &rsquo;
      </p>
      <section className="mt-4 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {data.results.map((image) => (
          <img
            key={image.id}
            src={image?.urls?.small}
            alt={image.alt_description ?? undefined}
            className="w-full rounded-lg object-cover break-inside-avoid shadow-sm hover:shadow-md transition-shadow duration-200"
          />
        ))}
      </section>
    </>
  )
}

export default Gallery
