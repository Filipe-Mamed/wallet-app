import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    height: "100%",
    backgroundColor: "#F8F8FF",
  },
  $text: {
    textAlign: "center",
    marginTop: RFValue(300),
  },
});

export const { $container, $text } = styles;