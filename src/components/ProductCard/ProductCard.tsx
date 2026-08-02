import { Image, Pressable, Text, View } from "react-native"

import { Product } from "@/src/types/Product"

import styles from "./ProductCard.styles"

interface ProductCardProps {
  product: Product
  onPress: () => void
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.rating}>⭐ {product.rating}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
