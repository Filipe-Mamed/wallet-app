import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $contentCard, $body } from "./Wallet.Styled";
import { Header } from "../../shared/components";
import { CardWallet } from "./components/CardWallet";
import { FinanceIcons } from "./components/FinanceIcons";

import FotoIlustrativa from "../../assets/imgs/foto-ilustrativa.jpg";

export function Wallet() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={$container}>
          <Header
            name="Carteira"
            status="Ativo"
            // imgBack={{
            //   source: require("../../assets/imgs/botão-voltar.png"),
            //   style: { tintColor: "#4B0082", width: 43, height: 43 },
            // }}
            avatar={FotoIlustrativa}
          />
          <View style={$contentCard}>
            <CardWallet />
          </View>
          <View style={$body}>
            <FinanceIcons />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
