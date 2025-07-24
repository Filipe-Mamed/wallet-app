import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $contentCard, $body, $footer } from "./Wallet.Styled";
import { Header } from "../../shared/components";
import { CardWallet } from "./components/CardWallet";
import { FinanceIcons } from "./components/FinanceIcons";
import { Transaction } from "./components/Transaction";

import FotoIlustrativa from "../../assets/imgs/foto-ilustrativa.jpg";

export function Wallet() {
  return (
    <View style={$container}>
      <Header
        nameLeft="Carteira"
        status="Ativo"
        avatar={FotoIlustrativa}
      />
      <View style={$contentCard}>
        <CardWallet />
      </View>
      <View style={$body}>
        <FinanceIcons />
      </View>
      <View style={$footer}>
        <Transaction />
      </View>
    </View>
  );
}
