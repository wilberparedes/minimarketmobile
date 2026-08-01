import ProductService from "@/src/services/ProductService"
import { useEffect } from "react"
import { StyleSheet, Text } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"

const ProductsScreen = () => {
  useEffect(() => {
    ProductService.getProducts()
      .then((products) => console.log(products))
      .catch(console.error)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Products Screen</Text>
    </SafeAreaView>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
