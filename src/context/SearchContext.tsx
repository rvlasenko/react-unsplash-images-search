import { createContext, useContext, useState } from "react"
import type { Dispatch, ReactNode, SetStateAction } from "react"

interface SearchContextValue {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchContextValue | null>(null)

export const useSearchContext = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) throw new Error("useSearchContext must be used within SearchProvider")
  return ctx
}

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("cat")
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
