import useInitializeApp from "./src/hooks/useInitializeApp"
import RootNavigator from "./src/navigation/navigators/RootNavigator"

export default function App() {
  useInitializeApp()
  return <RootNavigator />
}
