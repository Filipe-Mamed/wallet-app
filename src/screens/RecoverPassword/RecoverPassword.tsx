import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Container,
  Header,
  Title,
  Description,
  Body,
  Footer,
  TextFooter,
  ButtonFooter,
} from "./RecoverPassword.Styled";
import { Input } from "../../shared/components/Input/Input";
import { Button } from "../../shared/components";
import { useNavigation } from "@react-navigation/native";

export function RecoverPassword() {
  const navigation = useNavigation();

  const handleBackLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Container}>
          <View style={Header}>
            <Text style={Title}>Esqueceu sua senha?</Text>
            <Text style={Description}>
              Informe o e-mail cadastrado para redefinir sua senha.
            </Text>
          </View>
          <View style={Body}>
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
          <View style={Footer}>
            <Text style={TextFooter}>Lembrou a senha?</Text>
            <Button
              style={ButtonFooter}
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
