import { Text, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { styles } from "./Login.Styled";
import {
  ButtonSocialGoogle,
  ButtonSocialFacebook,
} from "../../shared/components";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { useCallback, useRef } from "react";
import { Input } from "../../shared/components/Input/Input";

export function Login() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
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
          <Input name="Email" placeholder="Usuário"
            leftImg={require("../../assets/imgs/InputsImgs/do-utilizador.png")}
          />
          <Input name="Senha" placeholder="Senha" secureTextEntry
            leftImg={require("../../assets/imgs/InputsImgs/trancar.png")}
            rightImg={require("../../assets/imgs/InputsImgs/olho-fechado.png")}
          />
        </Form>
        <View style={styles.footer}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

{
  /* <Input
            name="Email"
            placeholder="Email"
            source={require("../../assets/imgs/InputsImgs/do-utilizador.png")}
          ></Input>
          <Input
            name="Senha"
            placeholder="Senha"
            source={require("../../assets/imgs/InputsImgs/trancar.png")}
            secureTextEntry={true}
          ></Input> */
}
