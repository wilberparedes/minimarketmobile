import { FlatList } from "react-native"

import { NativeStackScreenProps } from "@react-navigation/native-stack"

import EmptyState from "@/src/components/EmptyState"
import ErrorView from "@/src/components/ErrorView"
import LoadingView from "@/src/components/LoadingView"
import ProductCard from "@/src/components/ProductCard"

import useProducts from "@/src/hooks/useProducts"

import { ProductsStackParamList } from "@/src/navigation/types"

type Props = NativeStackScreenProps<ProductsStackParamList, "Products">

export default function ProductsScreen({ navigation }: Props) {
  const { products, loading, error, refreshing, refreshProducts } =
    useProducts()

  if (loading) {
    return <LoadingView />
  }

  if (error) {
    return <ErrorView message={error} onRetry={refreshProducts} />
  }

  if (products.length === 0) {
    return <EmptyState />
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              productId: item.id,
            })
          }
        />
      )}
      refreshing={refreshing}
      onRefresh={refreshProducts}
    />
  )
}
