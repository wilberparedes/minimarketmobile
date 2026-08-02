import { useCallback } from "react"
import { FlatList, Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"
import { useFocusEffect } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import ProductCard from "@/src/components/ProductCard"

import { useFavoriteStore } from "@/src/store/favorites"

import { FavoritesStackParamList } from "@/src/navigation/types"

import styles from "./FavoritesScreen.styles"

type Props = NativeStackScreenProps<FavoritesStackParamList, "Favorites">

export default function FavoritesScreen({ navigation }: Props) {
  const { favorites, loadFavorites } = useFavoriteStore()

  useFocusEffect(
    useCallback(() => {
      loadFavorites()
    }, []),
  )

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <MaterialIcons name="favorite-border" size={80} color="#D1D5DB" />

        <Text style={styles.emptyTitle}>No tienes favoritos</Text>

        <Text style={styles.emptyDescription}>
          Agrega productos desde la pantalla de detalle.
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
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
      />
    </View>
  )
}
