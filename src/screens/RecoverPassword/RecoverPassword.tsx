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

import Email from "../../assets/imgs/InputsImgs/e-mail.png";

export function RecoverPassword() {
  const navigation = useNavigation();

  const handleBackLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={$container}>
        <KeyboardAvoidingView behavior="position" enabled>
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
              leftImg={Email}
            />
            <Button variant="purple" children="Enviar" onPress={() => {}} />
          </View>
        </KeyboardAvoidingView>
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
  );
}
