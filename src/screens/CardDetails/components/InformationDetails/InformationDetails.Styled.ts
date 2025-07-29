import { StyleSheet } from "react-native";
import { Fonts } from "../../../../shared/styles";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    $containerInformationDetails:{
        flexDirection: "row",
        gap: RFValue(30),
    },
    $title:{
        fontSize: RFValue(16),
        fontFamily: Fonts.Poppins_Regular,
        color: "#A9A9A9",
    },
    $information:{
        fontSize: RFValue(16),
        fontFamily: Fonts.Poppins_Regular,
    }
})


export const {$containerInformationDetails, $title, $information} = styles