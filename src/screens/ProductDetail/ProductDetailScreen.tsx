import { FlatList, Image, ScrollView, Text, View } from "react-native"

import { NativeStackScreenProps } from "@react-navigation/native-stack"

import ErrorView from "@/src/components/ErrorView"
import LoadingView from "@/src/components/LoadingView"
import useProduct from "@/src/hooks/useProduct"

import { ProductsStackParamList } from "@/src/navigation/types"

import styles from "./ProductDetailScreen.styles"

type Props = NativeStackScreenProps<ProductsStackParamList, "ProductDetail">

export default function ProductDetailScreen({ route }: Props) {
  const { productId } = route.params

  const { product, loading, error, loadProduct } = useProduct(productId)

  if (loading) {
    return <LoadingView total={1} />
  }

  if (error) {
    return <ErrorView message={error} onRetry={loadProduct} />
  }

  if (!product) {
    return null
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={product.images}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>⭐ {product.rating}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
