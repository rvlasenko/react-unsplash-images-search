const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements.search.value)
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button className="btn">Search</button>
      </form>
    </section>
  )
}

export default SearchForm
