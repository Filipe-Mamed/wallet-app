import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "../../styles";

export const styles = StyleSheet.create({
  container: {
    borderWidth: RFValue(1),
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
    padding: RFValue(10),
    borderRadius: RFValue(13),
    marginBottom: RFValue(10),
  },
  inputContainer: {
    flexDirection: "row",
    gap: RFValue(10),
    alignItems: "center",
  },
  inputImg: {
    width: RFValue(26),
    height: RFValue(26),
  },
  input: {
    color: "#000000",
    fontSize: RFValue(16),
    paddingVertical: RFValue(1),
    flex: 1,
    fontFamily: Fonts.Poppins_Regular,
  },
  label: {
    color: "#000000",
    marginBottom: RFValue(5),
    fontFamily: Fonts.Roboto_Light,
  },
  focused: {
    borderColor: "#6495ED",
  },
  filled: {
    borderColor: "#4CAF50",
  },
  error: {
    borderColor: "#f00",
  },
  errorText: {
    color: "#f00",
    fontSize: RFValue(12),
    marginTop: RFValue(4),
  },
});
