import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export function ScreenRoutes() {
  return (
    <Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
