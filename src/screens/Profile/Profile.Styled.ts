import { StyleSheet } from "react-native";
import { Fonts } from "../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  $avatar: {
    width: RFValue(95),
    height: RFValue(95),
    borderRadius: RFValue(50),
    alignSelf: "center",
  },
  $contentUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFValue(20),
    marginLeft: RFValue(30),
  },
  $nameUser: {
    fontSize: RFValue(20),
    fontFamily: Fonts.Poppins_Bold,
  },
  $imgEdit:{
    width: RFValue(22),
    height: RFValue(22),
    tintColor: "#45197D",
    marginLeft: RFValue(10),
  },
  $body: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(40),
    gap: RFValue(40),
  },
  $footer: {
    marginTop: RFValue(70),
    gap: RFValue(10),
  },
});

export const { $container, $avatar, $contentUser, $nameUser, $imgEdit, $body, $footer } =
  styles;
