import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // Poppins
        "Poppins-Light": require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
        "Poppins-Italic": require("../../assets/fonts/Poppins/Poppins-Italic.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-Bold": require("../../assets/fonts/Poppins/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-ExtraBold": require("../../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),

        // Roboto
        "Roboto-Light": require("../../assets/fonts/Roboto/Roboto-Light.ttf"),
        "Roboto-Italic": require("../../assets/fonts/Roboto/Roboto-Italic.ttf"),
        "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
        "Roboto-SemiBold": require("../../assets/fonts/Roboto/Roboto-SemiBold.ttf"),
        "Roboto-ExtraBold": require("../../assets/fonts/Roboto/Roboto-ExtraBold.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  if (!fontsLoaded) return null;

  return children;
};
