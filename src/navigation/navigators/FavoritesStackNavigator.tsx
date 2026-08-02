import { createNativeStackNavigator } from "@react-navigation/native-stack"

import FavoritesScreen from "../../screens/Favorites/FavoritesScreen"
import ProductDetailScreen from "../../screens/ProductDetail/ProductDetailScreen"

import { FavoritesStackParamList } from "../types"

const Stack = createNativeStackNavigator<FavoritesStackParamList>()

export default function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: "Detalle",
        }}
      />
    </Stack.Navigator>
  )
}
