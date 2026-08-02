import { create } from "zustand"

import FavoriteStorage from "@/src/services/FavoriteStorage"

import { FavoriteState } from "./favorite.types"

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) => ({
      favorites: [...state.favorites, product],
    })),
  removeFavorite: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== productId),
    })),
  isFavorite: (productId) =>
    get().favorites.some((item) => item.id === productId),

  setFavorites: (favorites) => set({ favorites }),

  loadFavorites: async () => {
    const favorites = await FavoriteStorage.getFavorites()

    set({ favorites })
  },

  toggleFavorite: async (product) => {
    const favorites = get().favorites

    const exists = favorites.some((item) => item.id === product.id)

    const updated = exists
      ? favorites.filter((item) => item.id !== product.id)
      : [...favorites, product]

    set({
      favorites: updated,
    })

    await FavoriteStorage.saveFavorites(updated)
  },
}))
