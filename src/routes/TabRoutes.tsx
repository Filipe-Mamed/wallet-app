import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "../shared/styles";

import _Home from "../assets/imgs/TabImg/home.png"
import _Stats from "../assets/imgs/TabImg/stats.png"
import _Notification from "../assets/imgs/TabImg/notification.png"
import _Settings from "../assets/imgs/TabImg/settings.png"

import { Wallet } from "../screens/Wallet";
import { Stats } from "../screens/Stats";
import { Notification } from "../screens/Notification";
import { Settings } from "../screens/Settings";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#808080",
        tabBarActiveTintColor: "#F8F8FF",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: RFValue(7),
          margin: RFValue(5),
          bottom: 20, // distância do fundo da tela
          backgroundColor: "#4B0082",
          borderRadius: 25,
          height: 60,

          // Sombra no Android
          elevation: 10,

          // Sombra no IOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(11),
          fontFamily: Fonts.Poppins_SemiBold,
          marginBottom: RFValue(5),
        },
      }}
    >
      <Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Início",
          tabBarItemStyle: {
            marginRight: -10,
            marginLeft: -9,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={_Home}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#F8F8FF" : "#808080",
              }}
            />
          ),
        }}
      />
      <Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarLabel: "Relatório",
          tabBarIcon: ({ focused }) => (
            <Image
              source={_Stats}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#F8F8FF" : "#808080",
              }}
            />
          ),
        }}
      />
      <Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "Notificação",
          tabBarIcon: ({ focused }) => (
            <Image
              source={_Notification}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#F8F8FF" : "#808080",
              }}
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Configuração",
          tabBarItemStyle: {
            marginRight: 10,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={_Settings}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#F8F8FF" : "#808080",
              }}
            />
          ),
        }}
      />
    </Navigator>
  );
}
