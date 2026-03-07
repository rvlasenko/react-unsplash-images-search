import { useImages } from "../hooks/useImages"

const Gallery = () => {
  const { data, error, isLoading, isError } = useImages()
  if (isLoading) {
    return (
      <section
        className="loading"
        role="status"
        aria-label="Loading images"
      ></section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>{error.message || "There was an error..."}</h4>
      </section>
    )
  }
  if (!data?.results?.length) {
    return (
      <section className="image-container">
        <h4>There were no results...</h4>
      </section>
    )
  }
  return (
    <section className="image-container">
      {data.results.map((image) => (
        <img
          key={image.id}
          src={image?.urls?.small}
          alt={image.alt_description}
          width={400}
        />
      ))}
    </section>
  )
}

export default Gallery
