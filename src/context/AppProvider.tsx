import type { ReactNode } from "react"
import { SearchProvider } from "./SearchContext"
import { ThemePickerProvider } from "./ThemeContext"

const AppProvider = ({ children }: { children: ReactNode }) => (
  <ThemePickerProvider>
    <SearchProvider>{children}</SearchProvider>
  </ThemePickerProvider>
)

export default AppProvider
