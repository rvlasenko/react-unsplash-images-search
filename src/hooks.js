import { useQuery } from "@tanstack/react-query"
import api from "./api"
import { useSearchContext } from "./search-context"

export const useImages = () => {
  const { query } = useSearchContext()
  return useQuery({
    queryKey: ["images", query],
    queryFn: async () => {
      const result = await api.get("/", {
        params: { query },
      })
      return result.data
    },
  })
}
