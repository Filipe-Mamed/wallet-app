import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $body:{
    padding: RFValue(20),
    gap: RFValue(26),
  },
  $footer:{
    marginTop: RFValue(28),
    gap: RFValue(5),
  }
  
});

export const {
  $container,
  $body,
  $footer
} = styles;
