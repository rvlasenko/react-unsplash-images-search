import api from "../lib/api"

export const getImages = async (query) => {
  const { data } = await api.get("/", { params: { query } })
  return data
}
