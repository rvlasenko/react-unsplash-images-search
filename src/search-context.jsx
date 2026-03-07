import { createContext, useContext, useState } from "react"

const SearchContext = createContext()

export const useSearchContext = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("cat")
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
