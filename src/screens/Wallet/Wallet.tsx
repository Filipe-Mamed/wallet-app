import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  $container,
  $contentCard,
  $body,
  $footer,
  $paddingBottom,
} from "./Wallet.Styled";
import { Header, Transaction } from "../../shared/components";
import { CardWallet } from "./components/CardWallet";
import { FinanceIcons } from "./components/FinanceIcons";

import FotoIlustrativa from "../../assets/imgs/foto-ilustrativa.jpg";
import { useNavigation } from "@react-navigation/native";

export function Wallet() {
  const navigation = useNavigation();

  const handleAllTransactions = () => {
    navigation.navigate("Screen", { screen: "AllTransactions" });
  };

  return (
    <View style={$container}>
      <Header nameLeft="Carteira" status="Ativo" avatar={FotoIlustrativa} />
      <View style={$contentCard}>
        <CardWallet />
      </View>
      <View style={$body}>
        <FinanceIcons />
      </View>
      <View style={$footer}>
        <Transaction
          topic="Últimas Transações"
          title="Ver tudo"
          onPress={handleAllTransactions}
          limit={6}
          paddingBottom={$paddingBottom}
        />
      </View>
    </View>
  );
}
