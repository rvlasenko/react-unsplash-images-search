import { usePosts } from "./hooks"

const Gallery = () => {
  const { data, isLoading } = usePosts()
  if (isLoading) return <p className="loading"></p>
  return (
    <section className="image-container">
      {data.results.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          width={400}
        />
      ))}
    </section>
  )
}

export default Gallery
