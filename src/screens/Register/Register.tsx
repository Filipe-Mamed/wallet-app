import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { styles } from "./Register.Styled";
import { Button } from "../../shared/components";
import { Input } from "../../shared/components/Input/Input";
import { useNavigation } from "@react-navigation/native";

export function Register() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Ao se registrar, sinta imediatamente a facilidade de realizar
              transações.
            </Text>
            <Text style={styles.description}>Cadastre-se</Text>
          </View>
          <View style={styles.main}>
            <Input
              name="nome"
              placeholder="Nome"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={require("../../assets/imgs/InputsImgs/do-utilizador.png")}
            />
            <Input
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              leftImg={require("../../assets/imgs/InputsImgs/e-mail.png")}
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
          </View>
          <View style={styles.buttonEntrar}>
            <Button variant="purple" children="Cadastrar" onPress={() => {}} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.textFooter}>Já tem cadastro?</Text>
            <Button
              style={styles.buttonFooter}
              variant="transparent"
              children="Entrar"
              onPress={handleLogin}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
