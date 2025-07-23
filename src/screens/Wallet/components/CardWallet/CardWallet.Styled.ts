import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $cardWallet: {
    backgroundColor: "#4B0082",
    width: "100%",
    height: RFValue(140),
    borderRadius: 60,
  },
  $coreContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: RFValue(45),
  },
  $contentBalance: {
    marginLeft: -15,
  },
  $balance: {
    color: "#F8F8FF",
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: RFValue(16),
  },
  $money: {
    color: "#F8F8FF",
    fontFamily: Fonts.Poppins_Bold,
    fontSize: RFValue(20),
  },
  $contentCard: {
    marginLeft: 50,
  },
  $card: {
    color: "#F8F8FF",
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: RFValue(16),
  },
  $flag: {
    color: "#F8F8FF",
    fontFamily: Fonts.Poppins_Bold,
    fontSize: RFValue(20),
  },
});

export const {
  $cardWallet,
  $coreContent,
  $contentBalance,
  $balance,
  $money,
  $contentCard,
  $card,
  $flag,
} = styles;
