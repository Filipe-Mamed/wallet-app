import { View, Text, Image } from "react-native";
import {
  $cardWallet,
  $coreContent,
  $contentBalance,
  $balance,
  $money,
  $contentCard,
  $card,
  $flag,
  $ellipse1,
  $ellipse2,
} from "./CardWallet.Styled";

import Ellipse1 from "../../../../assets/imgs/ellipse1.png"
import Ellipse2 from "../../../../assets/imgs/ellipse2.png"

export function CardWallet() {
  return (
    <View style={$cardWallet}>
      <View style={$coreContent}>
        <View style={$contentBalance}>
          <Image source={Ellipse1} style={$ellipse1} />
          <Text style={$balance}>Balanço</Text>
          <Text style={$money}>R$ 1.000,00</Text>
        </View>
        <View style={$contentCard}>
          <Text style={$card}>Cartão</Text>
          <Text style={$flag}>G2bank</Text>
          <Image source={Ellipse2} style={$ellipse2} />
        </View>
      </View>
    </View>
  );
}
