import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  $top: {
    width: "100%",
    alignItems: "center",
    padding: RFValue(30),
  },
  $bottom: {
    marginTop: -60,
    width: "100%",
    alignItems: "center",
    padding: RFValue(30),
  },
  $title: {
    fontSize: RFValue(20),
    fontFamily: Fonts.Poppins_Light,
  },
  $flatList: {
    backgroundColor: "#FFF",
    padding: RFValue(12),
    marginBottom: RFValue(10),
    borderRadius: RFValue(17),
    height: RFValue(115),

    // Sombra IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // Sombra Android
    elevation: 3,
  },
  $contentList: {
    paddingRight: RFValue(76),
    gap: RFValue(2),
  },
  $imgStyle: {
    width: RFValue(25),
    height: RFValue(25),
    marginLeft: -26,
    marginTop: -5,
    tintColor: "#FF0000",
  },
  $rowStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  $subTitle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: RFValue(13),
  },
  $type: {
    fontFamily: Fonts.Poppins_Regular,
    fontSize: RFValue(12),
    color: "#A9A9A9",
  },
  $badge: {
    backgroundColor: "#FF0000",
    width: RFValue(9),
    height: RFValue(9),
    borderRadius: RFValue(10),
    position: "absolute",
    left: 326,
    top: 0,
  },
});

export const {
  $top,
  $bottom,
  $title,
  $flatList,
  $contentList,
  $imgStyle,
  $rowStyle,
  $subTitle,
  $type,
  $badge,
} = styles;
