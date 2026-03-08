import api from "../lib/api"
import type { UnsplashResponse } from "../types/unsplash"

export const getImages = async (query: string): Promise<UnsplashResponse> => {
  const { data } = await api.get<UnsplashResponse>("/", { params: { query } })
  return data
}
