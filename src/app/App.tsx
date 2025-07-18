import { StatusBar } from "expo-status-bar";
import { FontProvider } from "../shared/contexts";
import { Login } from "../screens/Login/Login";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FontProvider>
          <StatusBar style="auto" translucent />
          <Login />
        </FontProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
