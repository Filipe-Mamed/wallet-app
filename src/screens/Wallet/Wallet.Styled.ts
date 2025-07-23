import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    height: "100%",
    backgroundColor: "#F8F8FF",
  },
  $contentCard:{
    padding: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
  },
  $body:{}
});

export const { $container, $contentCard, $body } = styles;
