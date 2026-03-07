import { useQuery } from "@tanstack/react-query"
import api from "./api"

export const usePosts = () => {
  return useQuery({
    queryKey: ["images", "cat"],
    queryFn: async () => {
      const { data } = await api.get("/", {
        params: {
          query: "cat",
        },
      })
      return data
    },
  })
}
