import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { BottomTabParamList } from "../types"

import FavoritesStackNavigator from "./FavoritesStackNavigator"
import ProductsStackNavigator from "./ProductsStackNavigator"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap

          switch (route.name) {
            case "ProductsTab":
              iconName = "storefront-outline"
              break

            case "FavoritesTab":
              iconName = "heart-outline"
              break

            default:
              iconName = "ellipse-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <BottomTab.Screen
        name="ProductsTab"
        component={ProductsStackNavigator}
        options={{
          title: "Productos",
        }}
      />

      <BottomTab.Screen
        name="FavoritesTab"
        component={FavoritesStackNavigator}
        options={{
          title: "Favoritos",
        }}
      />
    </BottomTab.Navigator>
  )
}
