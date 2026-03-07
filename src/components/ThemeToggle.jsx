import { useThemeContext } from "../context/ThemeContext"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext()

  return (
    <section className="toggle-container">
      <button
        className="dark-toggle toggle-icon"
        onClick={toggleTheme}
        aria-label={
          isDarkTheme ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  )
}

export default ThemeToggle
