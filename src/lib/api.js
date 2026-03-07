import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "https://api.unsplash.com/",
  params: {
    client_id: import.meta.env.VITE_UNSPLASH_API_KEY,
  },
})

export default api
