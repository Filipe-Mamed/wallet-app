import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {$container, $text} from "./Stats.Styled"

export function Stats(){
    return(
        <View style={$container}>
            <Text style={$text}>Stats</Text>
        </View>
    )
}