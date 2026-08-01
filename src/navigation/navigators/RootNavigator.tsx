import { StatusBar } from "react-native"

import { NavigationContainer } from "@react-navigation/native"

import BottomTabNavigator from "./BottomTabNavigator"

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} />
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
