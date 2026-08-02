import { Product } from "@/src/types/Product"

export interface FavoriteState {
  favorites: Product[]
  addFavorite: (product: Product) => void
  removeFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
  setFavorites: (favorites: Product[]) => void
}
