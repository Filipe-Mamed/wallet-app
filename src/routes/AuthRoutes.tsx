import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { RecoverPassword } from "../screens/RecoverPassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="RecoverPassword" component={RecoverPassword} />
    </Navigator>
  );
}
