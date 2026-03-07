import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/queryClient"
import App from "./App"
import "./index.css"
import { ThemePickerProvider } from "./context/ThemeContext"
import { SearchProvider } from "./context/SearchContext"
import React from "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemePickerProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ThemePickerProvider>
    </QueryClientProvider>
    ,
  </React.StrictMode>,
)
