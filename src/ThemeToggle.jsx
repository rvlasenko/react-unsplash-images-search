import { useThemeContext } from "./theme-context"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle toggle-icon" onClick={toggleTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  )
}

export default ThemeToggle
