import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  $container,
  $header,
  $title,
  $description,
  $body,
  $footer,
  $textFooter,
  $buttonFooter,
} from "./RecoverPassword.Styled";
import { Input, Button } from "../../shared/components";
import { useNavigation } from "@react-navigation/native";

export function RecoverPassword() {
  const navigation = useNavigation();

  const handleBackLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={$container}>
          <View style={$header}>
            <Text style={$title}>Esqueceu sua senha?</Text>
            <Text style={$description}>
              Informe o e-mail cadastrado para redefinir sua senha.
            </Text>
          </View>
          <View style={$body}>
            <Input
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={require("../../assets/imgs/InputsImgs/e-mail.png")}
            />
            <Button variant="purple" children="Enviar" onPress={() => {}} />
          </View>
          <View style={$footer}>
            <Text style={$textFooter}>Lembrou a senha?</Text>
            <Button
              style={$buttonFooter}
              variant="transparent"
              children="Fazer login"
              onPress={handleBackLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
