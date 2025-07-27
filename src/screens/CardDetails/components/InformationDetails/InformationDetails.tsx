import { Text, View } from "react-native";
import {$containerInformationDetails, $title, $information} from "./InformationDetails.Styled"

export function InformationDetails() {
  return (
    <>
      <View style={$containerInformationDetails}>
        <Text style={$title}>Nome</Text>
        <Text style={$information}>Fulano Tal</Text>
      </View>
      <View style={$containerInformationDetails}>
        <Text style={$title}>Banco</Text>
        <Text style={$information}>G2bank</Text>
      </View>
      <View style={$containerInformationDetails}>
        <Text style={$title}>Conta</Text>
        <Text style={$information}>.... .... .... 2138</Text>
      </View>
      <View style={$containerInformationDetails}>
        <Text style={$title}>Status</Text>
        <Text style={$information}>Ativo</Text>
      </View>
      <View style={$containerInformationDetails}>
        <Text style={$title}>Validade</Text>
        <Text style={$information}>2025 - 2030</Text>
      </View>
    </>
  );
}
