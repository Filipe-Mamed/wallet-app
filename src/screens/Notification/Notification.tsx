import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $text } from "./Notification.Styled";

export function Notification() {
  return (
    <View style={$container}>
      <Text style={$text}>Notification</Text>
    </View>
  );
}
