import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $header: {
    marginBottom: -RFValue(65),
  },
});

export const {
  $container,
  $header,
} = styles;
