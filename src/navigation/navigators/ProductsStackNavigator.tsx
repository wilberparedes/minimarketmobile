import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProductDetailScreen from "../../screens/ProductDetail/ProductDetailScreen"
import ProductsScreen from "../../screens/Products/ProductsScreen"

import { ProductsStackParamList } from "../types"

const Stack = createNativeStackNavigator<ProductsStackParamList>()

export default function ProductsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: "Productos",
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
