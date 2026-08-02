import { Button, Text, View } from "react-native"
import styles from "./ErrorView.styles"

interface ErrorViewProps {
  message: string
  onRetry: () => void
}

export default function ErrorView({ message, onRetry }: ErrorViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Reintentar" onPress={onRetry} />
    </View>
  )
}
