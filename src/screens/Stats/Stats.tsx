import { Text, View, Image, ImageBackground } from "react-native";
import {
  $container,
  $stats,
  $imgStatistics,
  $number,
  $contentBalance,
  $textBalance,
  $balanceValue,
  $paddingBottom,
} from "./Stats.Styled";

import { Header, Transaction } from "../../shared/components";
import statistics from "../../assets/imgs/statistics.png";
import { useNavigation } from "@react-navigation/native";

export function Stats() {
  const navigation = useNavigation();

  function handleAllTransactions() {
    navigation.navigate("Screen", { screen: "AllTransactions" });
  }

  return (
    <View style={$container}>
      <Header nameLeft="Estatísticas de renda" />
      <View style={$stats}>
        <ImageBackground source={statistics} style={$imgStatistics}>
          <Text style={$number}>R$ 2100</Text>
        </ImageBackground>
        <View style={$contentBalance}>
          <Text style={$textBalance}>Saldo Total</Text>
          <Text style={$balanceValue}>R$ 13.000</Text>
        </View>
      </View>
      <Transaction
        topic="Transações"
        title="Mais recente"
        limit={6}
        paddingBottom={$paddingBottom}
        onPress={handleAllTransactions}
      />
    </View>
  );
}
