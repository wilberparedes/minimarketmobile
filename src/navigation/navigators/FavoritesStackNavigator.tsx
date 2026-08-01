import { createNativeStackNavigator } from "@react-navigation/native-stack"

import FavoritesScreen from "../../screens/Favorites/FavoritesScreen"

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
    </Stack.Navigator>
  )
}
