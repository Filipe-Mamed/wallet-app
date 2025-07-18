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
    justifyContent: "center"
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
    marginTop: RFValue(60),
    fontSize: RFValue(15)
  },
  buttonGroup: {
    flexDirection: "row",
    gap: RFValue(20),
    marginTop: RFValue(15),
  },
  main:{
    gap: RFValue(10),
  },
  footer:{}
});
