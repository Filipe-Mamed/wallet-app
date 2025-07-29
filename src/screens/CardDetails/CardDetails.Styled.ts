import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $containerCardDetails: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $cardDetails:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: RFValue(80),
  },
  $imgCard:{
    width: "100%",
    height: RFValue(220),
    resizeMode: "contain",
    marginTop: RFValue(20),
  },
  $body:{
    marginTop: RFValue(40),
    gap: RFValue(20),
    marginBottom: RFValue(50),
    marginLeft: RFValue(20),
  }
});

export const { $containerCardDetails, $cardDetails, $imgCard, $body } = styles;
