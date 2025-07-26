import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "../screens/Profile";
import { AddCard } from "../screens/AddCard/";

const { Navigator, Screen } = createNativeStackNavigator();

export function ScreenRoutes() {
  return (
    <Navigator
      initialRouteName="AddCard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="AddCard" component={AddCard} />
    </Navigator>
  );
}
