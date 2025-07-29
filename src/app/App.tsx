import { StatusBar } from "expo-status-bar";
import { FontProvider } from "../shared/contexts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "../routes";
export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8FF" }}>
          <FontProvider>
            <StatusBar style="auto" translucent />
            <AppRoutes />
          </FontProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
