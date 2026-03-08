import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface ThemeContextValue {
  isDarkTheme: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useThemeContext must be used within ThemePickerProvider")
  return ctx
}

export const ThemePickerProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setTheme] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  )
  const toggleTheme = () => {
    setTheme((prev) => !prev)
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme)
  }, [isDarkTheme])
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
