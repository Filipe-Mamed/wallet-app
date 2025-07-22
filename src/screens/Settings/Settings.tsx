import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {$container} from "./Settings.Styled"

export function Settings(){
    return(
        <View style={$container}>
            <Text>Settings</Text>
        </View>
    )
}