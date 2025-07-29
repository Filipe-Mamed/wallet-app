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
  $buttonGroup,
  $main,
  $buttonEntrar,
  $footerGroup,
  $forgotPassword,
  $footer,
  $textFooter,
  $buttonFooter,
} from "./Login.Styled";
import {
  ButtonSocialGoogle,
  ButtonSocialFacebook,
  Button,
  Input,
} from "../../shared/components";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useCallback, useRef } from "react";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { useNavigation } from "@react-navigation/native";

import User from "../../assets/imgs/InputsImgs/do-utilizador.png";
import Lock from "../../assets/imgs/InputsImgs/trancar.png";
import OpenEye from "../../assets/imgs/InputsImgs/olho-aberto.png";

export function Login() {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    navigation.navigate("RecoverPassword");
  };

  const handleMain = () => {
    navigation.navigate("Main");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={$container}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={$header}>
            <Text style={$title}>Seja bem-vindo(a) {"\n"} a App Carteira</Text>
            <Text style={$description}>Entrar com</Text>
            <View style={$buttonGroup}>
              <ButtonSocialGoogle title="Google" />
              <ButtonSocialFacebook title="Facebook" />
            </View>
          </View>
          <Form style={$main} ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="usuario"
              placeholder="Usuário"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={User}
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
            <View style={$buttonEntrar}>
              <Button variant="purple" children="Entrar" onPress={handleMain} />
            </View>
          </Form>
        </KeyboardAvoidingView>
        <View style={$footerGroup}>
          <View style={$forgotPassword}>
            <ForgotPassword onPress={handleForgotPassword} />
          </View>
          <View style={$footer}>
            <Text style={$textFooter}>Não tem cadastro ainda?</Text>
            <Button
              style={$buttonFooter}
              variant="transparent"
              children="Cadastre-se"
              onPress={handleRegister}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
