import { StyleSheet } from "react-native";
import { Fonts } from "../../styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $button: {
    backgroundColor: "#4368C7",
    width: RFValue(140),
    height: RFValue(60),
    borderRadius: RFValue(13),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: RFValue(10),

    // Sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //   // Sombra Android
    elevation: 5,
  },
  $buttonText: {
    color: "#FFFFFF",
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Light,
    marginTop: RFValue(3),
  },
});

export const { $button, $buttonText } = styles;
