import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {$container} from "./Stats.Styled"

export function Stats(){
    return(
        <View style={$container}>
            <Text>Stats</Text>
        </View>
    )
}