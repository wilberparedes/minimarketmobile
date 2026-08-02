import { Text, View } from "react-native"

import styles from "./EmptyState.styles"

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay productos disponibles.</Text>
    </View>
  )
}
