import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Fonts } from "../../styles";

const styles = StyleSheet.create({
  $container: {
    width: "100%",
    height: RFValue(58),
    padding: RFValue(13),
    justifyContent: "center",
    borderRadius: RFValue(8),
    backgroundColor: "#DCDCDC",
  },
  $inputContainer: {
    flexDirection: "row",
    gap: RFValue(3),
    alignItems: "center",
  },
  $input: {
    flex: 1,
    height: RFValue(50),
    fontSize: RFValue(16),
    fontFamily: Fonts.Poppins_Regular,
    color: "#000000",
    marginTop: RFValue(4),
  },
  $inputImg: {
    width: RFValue(26),
    height: RFValue(26),
  },
});

export const { $container, $inputContainer, $input, $inputImg } = styles;
