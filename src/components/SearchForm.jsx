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
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button className="btn">Search</button>
      </form>
    </section>
  )
}

export default SearchForm
