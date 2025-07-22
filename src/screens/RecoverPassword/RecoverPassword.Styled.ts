import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F8F8FF",
    padding: RFValue(13),
    alignItems: "center",
    justifyContent: "space-between",
  },
  Header: {
    marginTop: RFValue(50),
    padding: RFValue(20),
    alignItems: "center",
    justifyContent: "space-between",
  },
  Title: {
    color: "black",
    fontFamily: Fonts.Poppins_Medium,
    marginTop: RFValue(40),
    fontSize: RFValue(25),
    textAlign: "center",
  },
  Description: {
    color: "black",
    fontFamily: Fonts.Poppins_Light,
    marginTop: RFValue(40),
    fontSize: RFValue(15),
    textAlign: "center"
  },
  Body: {
    marginTop: RFValue(20),
    gap:RFValue(25),
    width: "100%",
  },
  Footer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: RFValue(5),
    marginTop: RFValue(40),
    marginBottom: RFValue(180),
  },
  TextFooter:{
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    color: "#808080",
  },
  ButtonFooter:{
    width: "auto",
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    textDecorationLine: "underline",
    color: "#0000FF",
    textDecorationColor: "#0000FF",
  }
});

export const { Container, Title, Description, Header, Body, Footer, TextFooter, ButtonFooter } = styles;
