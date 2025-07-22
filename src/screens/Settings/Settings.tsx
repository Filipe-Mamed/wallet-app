import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {$container, $text} from "./Settings.Styled"

export function Settings(){
    return(
        <View style={$container}>
            <Text style={$text}>Settings</Text>
        </View>
    )
}