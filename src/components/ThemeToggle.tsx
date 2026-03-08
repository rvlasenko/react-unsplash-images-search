import { useThemeContext } from "../context/ThemeContext"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext()

  return (
    <div className="flex justify-end">
      <button
        onClick={toggleTheme}
        aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
        className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
      >
        {isDarkTheme ? (
          <BsFillSunFill className="w-5 h-5" />
        ) : (
          <BsFillMoonFill className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
