import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  $container,
  $header,
  $title,
  $description,
  $main,
  $buttonEntrar,
  $footer,
  $textFooter,
  $buttonFooter,
} from "./Register.Styled";
import { Input, Button } from "../../shared/components";
import { useNavigation } from "@react-navigation/native";

import User from "../../assets/imgs/InputsImgs/do-utilizador.png"
import Email from "../../assets/imgs/InputsImgs/e-mail.png"
import Lock from "../../assets/imgs/InputsImgs/trancar.png"
import OpenEye from "../../assets/imgs/InputsImgs/olho-aberto.png"

export function Register() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={$container}>
          <KeyboardAvoidingView behavior="position" enabled>
          <View style={$header}>
            <Text style={$title}>
              Ao se registrar, sinta imediatamente a facilidade de realizar
              transações.
            </Text>
            <Text style={$description}>Cadastre-se</Text>
          </View>
          <View style={$main}>
            <Input
              name="nome"
              placeholder="Nome"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={User}
            />
            <Input
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={Email}
            />
            <Input
              name="senha"
              placeholder="Senha"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              showPasswordToggle
              leftImg={Lock}
              rightImg={OpenEye}
            />
          </View>
          <View style={$buttonEntrar}>
            <Button variant="purple" children="Cadastrar" onPress={() => {}} />
          </View>
          </KeyboardAvoidingView>
          <View style={$footer}>
            <Text style={$textFooter}>Já tem cadastro?</Text>
            <Button
              style={$buttonFooter}
              variant="transparent"
              children="Entrar"
              onPress={handleLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}
