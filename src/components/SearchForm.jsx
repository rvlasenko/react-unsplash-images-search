import { useState } from "react"
import { useSearchContext } from "../context/SearchContext"

const SearchForm = () => {
  const { query, setQuery } = useSearchContext()
  const [value, setValue] = useState(query)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setQuery(value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xl mx-auto">
      <input
        type="search"
        name="search"
        placeholder="Search images..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="flex-1 px-4 py-2.5 text-sm rounded-l-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-colors duration-200"
      />
      <button
        type="submit"
        className="px-5 py-2.5 text-sm font-medium rounded-r-lg bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm
