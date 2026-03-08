export interface UnsplashImage {
  id: string
  alt_description: string | null
  urls: {
    regular: string
    small: string
    thumb: string
  }
}

export interface UnsplashResponse {
  results: UnsplashImage[]
  total: number
  total_pages: number
}
