import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native"

import { RouteProp } from "@react-navigation/native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated"

import ErrorView from "@/src/components/ErrorView"
import LoadingView from "@/src/components/LoadingView"
import useProduct from "@/src/hooks/useProduct"

import { useFavoriteStore } from "@/src/store/favorites"

import { ProductDetailParams } from "@/src/navigation/types"

import styles from "./ProductDetailScreen.styles"

type ProductDetailParamList = {
  ProductDetail: ProductDetailParams
}

type Props = {
  route: RouteProp<ProductDetailParamList, "ProductDetail">
}

export default function ProductDetailScreen({ route }: Props) {
  const { productId } = route.params

  const { product, loading, error, loadProduct } = useProduct(productId)
  const { toggleFavorite, isFavorite } = useFavoriteStore()

  const scale = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }))

  if (loading) {
    return <LoadingView total={1} />
  }

  if (error) {
    return <ErrorView message={error} onRetry={loadProduct} />
  }

  if (!product) {
    return null
  }

  const favorite = isFavorite(product.id)

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
          <Animated.View style={animatedStyle}>
            <Pressable
              style={[
                styles.button,
                favorite ? styles.buttonFavorite : styles.buttonNotFavorite,
              ]}
              onPress={async () => {
                scale.value = withSequence(withSpring(1.25), withSpring(1))
                await toggleFavorite(product)
              }}
            >
              <Text style={styles.buttonText}>
                {favorite ? "❤️ Quitar de Favoritos" : "🤍 Añadir a Favoritos"}
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  )
}
