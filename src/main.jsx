import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./queryClient"
import App from "./App"
import "./index.css"
import { ThemePickerProvider } from "./theme-context"
import { SearchProvider } from "./search-context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemePickerProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemePickerProvider>
  </QueryClientProvider>,
)
