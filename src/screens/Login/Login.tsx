import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./Login.Styled";
import {
  ButtonSocialGoogle,
  ButtonSocialFacebook,
  Button,
} from "../../shared/components";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useCallback, useRef } from "react";
import { Input } from "../../shared/components/Input/Input";
import { ForgotPassword } from "./components/ForgotPassword";

export function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Seja bem-vindo(a) {"\n"} a App Carteira
            </Text>
            <Text style={styles.description}>Entrar com</Text>
            <View style={styles.buttonGroup}>
              <ButtonSocialGoogle title="Google" />
              <ButtonSocialFacebook title="Facebook" />
            </View>
          </View>
          <Form ref={formRef} onSubmit={handleSubmit} style={styles.main}>
            <Input
              name="usuario"
              placeholder="Usuário"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={require("../../assets/imgs/InputsImgs/do-utilizador.png")}
            />
            <Input
              name="senha"
              placeholder="Senha"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              showPasswordToggle
              leftImg={require("../../assets/imgs/InputsImgs/trancar.png")}
              rightImg={require("../../assets/imgs/InputsImgs/olho-aberto.png")}
            />
            <View style={styles.buttonEntrar}>
              <Button variant="purple" children="Entrar" onPress={() => {}} />
            </View>
          </Form>
          <View style={styles.footerGroup}>
            <View style={styles.forgotPassword}>
              <ForgotPassword />
            </View>
            <View style={styles.footer}>
              <Text style={styles.textFooter}>Não tem cadastro ainda?</Text>
              <Button
                variant="transparent"
                children="Cadastre-se"
                onPress={() => {}}
                style={styles.buttonFooter}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
