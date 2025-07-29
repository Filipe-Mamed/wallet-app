import { Text, View, Image } from "react-native";
import {
  $containerCardDetails,
  $cardDetails,
  $imgCard,
  $body
} from "./CardDetails.Styled";

import { ButtonSettings, Header } from "../../shared/components";

import Back from "../../assets/imgs/botão-voltar.png";
import Card_Details from "../../assets/imgs/Card/card-details.png";
import { InformationDetails } from "./components/InformationDetails";

export function CardDetails() {
  return (
    <View style={$containerCardDetails}>
      <Header
        nameRight="Detalhes do Cartão"
        imgBack={{ source: Back, style: { tintColor: "#45197D" } }}
      />
      <View style={$cardDetails}>
        <Image source={Card_Details} style={$imgCard} />
        <View style={$body}>
            <InformationDetails />
        </View>
        <ButtonSettings textOpacity text="Deletar Cartão" />
      </View>
    </View>
  );
}
