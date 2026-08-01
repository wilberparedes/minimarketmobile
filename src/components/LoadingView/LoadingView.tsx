import { useEffect, useRef } from "react"
import { Animated, Easing, View } from "react-native"

import styles from "./LoadingView.styles"

function SkeletonCard() {
  const opacity = useRef(new Animated.Value(0.4)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [opacity])

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity,
        },
      ]}
    >
      <View style={styles.image} />

      <View style={styles.body}>
        <View style={styles.title} />

        <View style={styles.description} />

        <View style={styles.descriptionShort} />

        <View style={styles.footer}>
          <View style={styles.rating} />
          <View style={styles.price} />
        </View>
      </View>
    </Animated.View>
  )
}

export default function LoadingView() {
  return (
    <View style={styles.container}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </View>
  )
}
