import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import {RFValue} from "react-native-responsive-fontsize"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    padding: RFValue(13)
  },
  header: {
    padding: RFValue(20),
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontFamily: Fonts.Poppins_Medium,
    marginTop: RFValue(40),
    fontSize: RFValue(25),
    textAlign: "center"
  },
  description: {
    color: "black",
    fontFamily: Fonts.Poppins_Light,
    marginTop: RFValue(50),
    fontSize: RFValue(15)
  },
  buttonGroup: {
    flexDirection: "row",
    gap: RFValue(20),
    marginTop: RFValue(15),
  },
  main:{
    gap: RFValue(10),
    marginTop: RFValue(20),
  },
  buttonEntrar:{
     marginTop: RFValue(20),
     gap: RFValue(10),
  },
  footer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(100),
    gap: RFValue(5),
  },
  buttonFooter:{
    width: "auto",
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    color: "#0000FF",
    textDecorationLine: "underline",
    textDecorationColor: "#0000FF",
  },
  textFooter:{
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    color: "#808080"
  }
});
