import { Text, View, Image, ImageBackground } from "react-native";
import {
  $containerCard,
  $card,
  $addCard,
  $chip,
  $visa,
  $text,
} from "./AddCard.Styled";
import { Header } from "../../shared/components";

import Back from "../../assets/imgs/botão-voltar.png";
import Card from "../../assets/imgs/Card/add-card.png";
import Chip from "../../assets/imgs/Card/chip-card.png";
import Visa from "../../assets/imgs/Card/visa.png";

export function AddCard() {
  return (
    <View style={$containerCard}>
      <Header
        nameRight="Adicionar Cartão"
        imgBack={{ source: Back, style: { tintColor: "#45197D" } }}
      />
      <View style={$card}>
        <ImageBackground source={Card} style={$addCard}>
          <Image source={Chip} style={$chip} />
          <Image source={Visa} style={$visa} />
        </ImageBackground>
        <Text style={$text}>
          Adicione um novo cartão {"\n"} à sua carteira para facilitar sua vida
        </Text>
      </View>
    </View>
  );
}
