import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: RFValue(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RFValue(10),
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconImg: {
    marginLeft: RFValue(10),
    width: RFValue(38),
    height: RFValue(38),
  },
  text: {
    fontFamily: Fonts.Poppins_SemiBold,
    fontSize: RFValue(16),
  },
});
