import { create } from "zustand"

import { Product } from "@/src/types/Product"

import { FavoriteState } from "./favorite.types"

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  addFavorite: (product: Product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFavorite: (productId: number) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (favorite) => favorite.id !== productId,
      ),
    })),
  isFavorite: (productId: number) =>
    get().favorites.some((favorite) => favorite.id === productId),
  setFavorites: (favorites: Product[]) =>
    set({
      favorites,
    }),
}))
