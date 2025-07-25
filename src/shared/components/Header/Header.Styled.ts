import { StyleSheet } from "react-native";
import { Fonts } from "../../styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    backgroundColor: "transparent",
  },
  $contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: RFValue(18),
  },
  $header: {},
  $avatar: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(30),
  },
  $appName: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: RFValue(19),
  },
  $appNameRight: {
    fontFamily: Fonts.Poppins_Bold,
    fontSize: RFValue(19),
    marginRight: RFValue(50),
  },
  $status: {
    fontFamily: Fonts.Poppins_Medium,
    color: "#808080",
    fontSize: RFValue(13),
  },
  $flexRow:{
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(10),
  }
});

export const {
  $container,
  $contentHeader,
  $header,
  $avatar,
  $appName,
  $appNameRight,
  $status,
  $flexRow,
} = styles;
