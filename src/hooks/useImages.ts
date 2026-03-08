import { useQuery } from "@tanstack/react-query"
import { useSearchContext } from "../context/SearchContext"
import { getImages } from "../services/imagesService"

export const useImages = () => {
  const { query } = useSearchContext()
  return useQuery({
    queryKey: ["images", query],
    queryFn: () => getImages(query),
  })
}
