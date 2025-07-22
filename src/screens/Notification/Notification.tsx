import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {$container} from "./Notification.Styled"

export function Notification(){
    return(
        <View style={$container}>
            <Text>Notification</Text>
        </View>
    )
}