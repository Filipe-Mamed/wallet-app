import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $containerCard: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFValue(60),
    gap: RFValue(60),
  },
  $addCard: {
    width: RFValue(240),
    height: RFValue(340),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B0082",
    borderRadius: RFValue(50),
  },
  $chip: {
    position: "absolute",
    resizeMode: "contain",
    top: RFValue(70),
    left: RFValue(50),
    width: RFValue(35),
    height: RFValue(40),
  },
  $visa: {
    position: "absolute",
    resizeMode: "contain",
    bottom: RFValue(35),
    right: RFValue(29),
    width: RFValue(66),
    height: RFValue(20),
  },
  $text: {
    textAlign: "center",
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(16),
  },
});

export const { $containerCard, $card, $addCard, $chip, $visa, $text } = styles;
