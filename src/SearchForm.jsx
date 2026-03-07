import { useSearchContext } from "./search-context"

const SearchForm = () => {
  const { setQuery } = useSearchContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.elements.search.value
    if (!query.trim()) return
    setQuery(query)
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
          required
        />
        <button className="btn">Search</button>
      </form>
    </section>
  )
}

export default SearchForm
