import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  buttonForgotPassword: {
    width: "auto",
    fontSize: RFValue(14),
    fontFamily: Fonts.Poppins_Regular,
    color: "#0000FF",
    textDecorationLine: "underline",
    textDecorationColor: "#0000FF",
  },
  textForgotPassword: {
    fontSize: RFValue(14),
    fontFamily: Fonts.Poppins_Regular,
    color: "#808080",
  },
});
