import { View, Text } from "react-native";
import {
  $cardWallet,
  $coreContent,
  $contentBalance,
  $balance,
  $money,
  $contentCard,
  $card,
  $flag,
} from "./CardWallet.Styled";

export function CardWallet() {
  return (
    <View style={$cardWallet}>
      <View style={$coreContent}>
        <View style={$contentBalance}>
          <Text style={$balance}>Balanço</Text>
          <Text style={$money}>R$ 1.000,00</Text>
        </View>
        <View style={$contentCard}>
          <Text style={$card}>Cartão</Text>
          <Text style={$flag}>G2bank</Text>
        </View>
      </View>
    </View>
  );
}
