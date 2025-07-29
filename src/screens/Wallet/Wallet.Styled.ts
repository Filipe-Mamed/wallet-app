import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $contentCard:{
    padding: RFValue(20),
    alignItems: "center",
    justifyContent: "center",
  },
  $body:{
  },
  $footer:{
    marginTop: RFValue(2),
    flex: 1,
  },
  $paddingBottom: {
    paddingBottom: RFValue(80),
  }
});

export const { $container, $contentCard, $body, $footer, $paddingBottom } = styles;
