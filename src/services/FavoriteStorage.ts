import AsyncStorage from "@react-native-async-storage/async-storage"

import { Product } from "@/src/types/Product"

const FAVORITES_KEY = "@mini-market:favorites"

class FavoriteStorage {
  async getFavorites(): Promise<Product[]> {
    try {
      const value = await AsyncStorage.getItem(FAVORITES_KEY)
      if (!value) {
        return []
      }
      return JSON.parse(value)
    } catch (error) {
      console.error(error)

      return []
    }
  }

  async saveFavorites(favorites: Product[]): Promise<void> {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error(error)
    }
  }

  async clearFavorites(): Promise<void> {
    try {
      await AsyncStorage.removeItem(FAVORITES_KEY)
    } catch (error) {
      console.error(error)
    }
  }
}

export default new FavoriteStorage()
