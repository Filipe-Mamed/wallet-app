import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $text } from "./Settings.Styled";
import { Header } from "../../shared/components";

import BotãoVoltar from "../../assets/imgs/botão-voltar.png";

export function Settings() {
  return (
    <View style={$container}>
      <Header
      imgBack={{ source: BotãoVoltar }}
        nameRight="Configurações"
      />
      <Text style={$text}>Settings</Text>
    </View>
  );
}
