import { StyleSheet } from "react-native";
import { Fonts } from "../../styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    paddingHorizontal: RFValue(5),
  },
  $transaction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(10),
  },
  $textTransaction: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: RFValue(18),
  },
  $button: {
    width: "auto",
    color: "#8438FF",
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(14),
  },
  $containerLista: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
  },
  $imgShadow: {
    backgroundColor: "#ffff",
    borderRadius: RFValue(10),

    // Sombra Android
    elevation: 5,

    // Sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  $imgIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain",
    borderRadius: RFValue(10),
  },
  $infoTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    marginLeft: RFValue(20),
  },
  $title: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: RFValue(14),
    marginTop: RFValue(3),
    marginBottom: -4,
  },
  $subTitle: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(12),
    color: "#808080",
  },
  $price: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: RFValue(14),
  },
});

export const {
  $container,
  $transaction,
  $textTransaction,
  $button,
  $containerLista,
  $imgShadow,
  $imgIcon,
  $infoTextContainer,
  $title,
  $subTitle,
  $price,
} = styles;
