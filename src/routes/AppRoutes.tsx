import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthRoutes } from "./AuthRoutes";
import { TabRoutes } from "./TabRoutes";
import { ScreenRoutes } from "./ScreenRoutes";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Screen name="Auth" component={AuthRoutes} />
      <Screen name="Main" component={TabRoutes} />
      <Screen name="Screen" component={ScreenRoutes} />
    </Navigator>
  );
}
