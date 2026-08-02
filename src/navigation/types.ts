export type ProductDetailParams = {
  productId: number
}

export type ProductsStackParamList = {
  Products: undefined
  ProductDetail: ProductDetailParams
}

export type FavoritesStackParamList = {
  Favorites: undefined
  ProductDetail: ProductDetailParams
}

export type BottomTabParamList = {
  ProductsTab: undefined
  FavoritesTab: undefined
}
