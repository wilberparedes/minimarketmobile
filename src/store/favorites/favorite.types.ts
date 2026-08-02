import { Product } from "@/src/types/Product"

export interface FavoriteState {
  favorites: Product[]
  addFavorite: (product: Product) => void
  removeFavorite: (productId: number) => void
  toggleFavorite: (product: Product) => Promise<void>
  isFavorite: (productId: number) => boolean
  loadFavorites: () => Promise<void>
  setFavorites: (favorites: Product[]) => void
}
