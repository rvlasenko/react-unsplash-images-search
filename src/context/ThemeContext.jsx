import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemePickerProvider = ({ children }) => {
  const [isDarkTheme, setTheme] = useState(false)
  const toggleTheme = () => {
    setTheme((prev) => !prev)
  }
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [isDarkTheme])
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
