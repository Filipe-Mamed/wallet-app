import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    backgroundColor: "blue",
  },
  $header:{
    backgroundColor: "black"
  },
  $text: {
    marginTop: RFValue(0),
    color: "blue",
    
  },
});

export const { $container, $header, $text } = styles;
