import { StyleSheet } from "react-native";
import { Fonts } from "../../styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $containerProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  $imgBackground: {
    backgroundColor: "#FFFFFF",
    borderRadius: RFValue(30),
    padding: RFValue(12),
    marginRight: RFValue(20),

    // Sombra Android
    elevation: 5,

    // Sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  $img: {
    width: RFValue(28),
    height: RFValue(28),
  },
  $opacityButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  $textProfile: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(19),
  },
  $proximo: {
    width: RFValue(24),
    height: RFValue(24),
  },
});

export const {
  $container,
  $containerProfile,
  $imgBackground,
  $img,
  $opacityButton,
  $textProfile,
  $proximo,
} = styles;
