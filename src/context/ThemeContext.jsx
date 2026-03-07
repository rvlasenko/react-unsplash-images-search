import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemePickerProvider = ({ children }) => {
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
