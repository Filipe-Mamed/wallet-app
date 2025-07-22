import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $header, $text } from "./Wallet.Styled";

export function Wallet() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={$container}>
          <View style={$header}>
            <Text style={$text}>Wallet</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
