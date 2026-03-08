import SearchForm from "./components/SearchForm"
import ThemeToggle from "./components/ThemeToggle"
import Gallery from "./components/Gallery"

const App = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <ThemeToggle />
        <h1 className="text-center text-3xl font-semibold tracking-tight mt-4 mb-8 text-zinc-800 dark:text-zinc-100">
          Image Search
        </h1>
        <SearchForm />
        <Gallery />
      </div>
    </main>
  )
}
export default App
