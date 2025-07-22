import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    backgroundColor: "#F8F8FF",
    padding: RFValue(13),
    alignItems: "center",
    justifyContent: "space-between",
  },
  $header: {
    marginTop: RFValue(50),
    padding: RFValue(20),
    alignItems: "center",
    justifyContent: "space-between",
  },
  $title: {
    color: "black",
    fontFamily: Fonts.Poppins_Medium,
    marginTop: RFValue(40),
    fontSize: RFValue(25),
    textAlign: "center",
  },
  $description: {
    color: "black",
    fontFamily: Fonts.Poppins_Light,
    marginTop: RFValue(40),
    fontSize: RFValue(15),
    textAlign: "center",
  },
  $body: {
    marginTop: RFValue(20),
    gap: RFValue(25),
    width: "100%",
  },
  $footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: RFValue(5),
    marginTop: RFValue(40),
    marginBottom: RFValue(180),
  },
  $textFooter: {
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    color: "#808080",
  },
  $buttonFooter: {
    width: "auto",
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    textDecorationLine: "underline",
    color: "#0000FF",
    textDecorationColor: "#0000FF",
  },
});

export const {
  $container,
  $title,
  $description,
  $header,
  $body,
  $footer,
  $textFooter,
  $buttonFooter,
} = styles;
