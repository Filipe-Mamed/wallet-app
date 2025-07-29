import { StyleSheet } from "react-native";
import { Fonts } from "../../styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $imgBackground: {
    backgroundColor: "#FFFFFF",
    borderRadius: RFValue(30),
    width: RFValue(58),
    height: RFValue(58),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    // // Sombra Android
    // elevation: 5,

    // // Sombra iOS
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    
    borderColor: "#DCDCDC",
    borderWidth: 1
  },
  $img: {
    width: RFValue(28),
    height: RFValue(28),
    tintColor: "#45197D"
  },
  $buttonText: {
    textAlign: "center",
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: RFValue(17),
    color: "#45197D"
  },
});

export const {$imgBackground, $img, $buttonText } = styles;
