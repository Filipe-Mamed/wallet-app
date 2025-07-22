import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    height: "100%",
    backgroundColor: "black",
  },
  $text: {
    textAlign: "center",
    marginTop: RFValue(300),
    color: "white",
  },
});

export const { $container, $text } = styles;
