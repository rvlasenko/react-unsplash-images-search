import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemePicker = ({ children }) => {
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
