import { Text, View, TouchableOpacity } from "react-native";
import { $container, $header } from "./AllTransactions.Styled";

import { Header, Transaction } from "../../shared/components";
import Back from "../../assets/imgs/botão-voltar.png";

export function AllTransactions() {
  return (
    <View style={$container}>
      <View style={$header}>
        <Header
          imgBack={{ source: Back, style: { tintColor: "#45197D" } }}
          nameRight="Minhas transações"
        />
      </View>
      <Transaction />
    </View>
  );
}
