import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $financeIcons: {
    padding: RFValue(10),
  },
  $icons: {
    width: RFValue(33),
    height: RFValue(33),
    tintColor: "#4B0082",
  },
  $iconNames: {
    alignItems: "center",
    gap: RFValue(10),
  },
  $name: {
    color: "#8438FF",
    fontSize: RFValue(13),
    fontFamily: Fonts.Poppins_Medium,
  },
  $shadowButton: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: RFValue(30),

    // Android
    elevation: 5,

    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  $botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export const {
  $financeIcons,
  $icons,
  $iconNames,
  $name,
  $shadowButton,
  $botao,
} = styles;
