import { useEffect } from "react"

import { useFavoriteStore } from "@/src/store/favorites"

export default function useInitializeApp() {
  const loadFavorites = useFavoriteStore((state) => state.loadFavorites)

  useEffect(() => {
    loadFavorites()
  }, [loadFavorites])
}
