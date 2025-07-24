import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $textForgotPassword: {
    fontSize: RFValue(14),
    fontFamily: Fonts.Poppins_Regular,
    color: "#808080",
  },
  $buttonForgotPassword: {
    width: "auto",
    fontSize: RFValue(14),
    fontFamily: Fonts.Poppins_Regular,
    color: "#0000FF",
    textDecorationColor: "#0000FF",
  },
});

export const { $textForgotPassword, $buttonForgotPassword } = styles;
