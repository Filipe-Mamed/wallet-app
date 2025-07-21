import React from "react";
import { Text, View } from "react-native";

import { TabRoutes } from "./TabRoutes";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  return <AuthRoutes/>
}
