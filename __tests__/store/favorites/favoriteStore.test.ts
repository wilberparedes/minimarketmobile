import { useFavoriteStore } from "@/src/store/favorites/favoriteStore"

import { Product } from "@/src/types/Product"

const product: Product = {
  id: 1,
  title: "iPhone",
  description: "Apple smartphone",
  price: 999,
  rating: 4.8,
  thumbnail: "thumbnail.jpg",
  images: ["ejemplo"],
}

describe("FavoriteStore", () => {
  beforeEach(() => {
    useFavoriteStore.setState({
      favorites: [],
    })
  })

  it("should add a favorite product", () => {
    const { addFavorite } = useFavoriteStore.getState()

    addFavorite(product)

    const { favorites } = useFavoriteStore.getState()

    expect(favorites).toHaveLength(1)
    expect(favorites[0]).toEqual(product)
  })

  it("should remove a favorite product", () => {
    const { addFavorite, removeFavorite } = useFavoriteStore.getState()

    addFavorite(product)

    removeFavorite(product.id)

    const { favorites } = useFavoriteStore.getState()

    expect(favorites).toHaveLength(0)
  })

  it("should return true when product is favorite", () => {
    const { addFavorite } = useFavoriteStore.getState()

    addFavorite(product)

    const favorite = useFavoriteStore.getState().isFavorite(product.id)

    expect(favorite).toBe(true)
  })

  it("should return false when product is not favorite", () => {
    const favorite = useFavoriteStore.getState().isFavorite(product.id)

    expect(favorite).toBe(false)
  })

  it("should replace favorites using setFavorites", () => {
    const secondProduct: Product = {
      id: 2,
      title: "MacBook",
      description: "Laptop",
      price: 1999,
      rating: 4.9,
      thumbnail: "macbook.jpg",
    }

    useFavoriteStore.getState().setFavorites([product, secondProduct])

    const { favorites } = useFavoriteStore.getState()

    expect(favorites).toHaveLength(2)
    expect(favorites[1].id).toBe(2)
  })
})
