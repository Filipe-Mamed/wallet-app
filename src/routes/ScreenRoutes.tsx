import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "../screens/Profile";
import { AddCard } from "../screens/AddCard/";
import { CardDetails } from "../screens/CardDetails";
import { AllTransactions } from "../screens/AllTransactions";

const { Navigator, Screen } = createNativeStackNavigator();

export function ScreenRoutes() {
  return (
    <Navigator
      initialRouteName="CardDetails"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="CardDetails" component={CardDetails} />
      <Screen name="AllTransactions" component={AllTransactions} />
    </Navigator>
  );
}
