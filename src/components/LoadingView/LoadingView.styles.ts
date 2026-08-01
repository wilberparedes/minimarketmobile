import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#E5E7EB",
  },
  body: {
    padding: 16,
  },
  title: {
    height: 20,
    width: "70%",
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    marginBottom: 12,
  },
  description: {
    height: 14,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    marginBottom: 8,
  },
  descriptionShort: {
    height: 14,
    width: "60%",
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  rating: {
    width: 70,
    height: 16,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
  price: {
    width: 60,
    height: 18,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
})
