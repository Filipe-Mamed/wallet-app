import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $stats: {
    alignItems: "center",
    justifyContent: "center",
    gap: RFValue(20),
  },
  $imgStatistics: {
    width: RFValue(340),
    height: RFValue(240),
    resizeMode: "contain",
  },
  $number: {
    position: "absolute",
    right: RFValue(148),
    bottom: RFValue(150),
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(14),
    color: "#FFFFFF",
  },
  $contentBalance: {
    alignItems: "center",
    justifyContent: "center",
  },
  $textBalance: {
    color: "#A9A9A9",
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(18),
  },
  $balanceValue: {
    color: "#8438FF",
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: RFValue(34),
  },
  $paddingBottom: {
    paddingBottom: RFValue(80),
  },
});

export const {
  $container,
  $stats,
  $imgStatistics,
  $number,
  $contentBalance,
  $textBalance,
  $balanceValue,
  $paddingBottom,
} = styles;
