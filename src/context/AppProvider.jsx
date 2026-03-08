import { SearchProvider } from "./SearchContext"
import { ThemePickerProvider } from "./ThemeContext"

const AppProvider = ({ children }) => (
  <ThemePickerProvider>
    <SearchProvider>{children}</SearchProvider>
  </ThemePickerProvider>
)

export default AppProvider
