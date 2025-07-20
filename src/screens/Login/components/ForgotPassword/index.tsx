import { Text, View } from "react-native";
import { Button } from "../../../../shared/components";
import { styles } from "./ForgotPassword.Styled";

export function ForgotPassword() {
  return (
    <>
      <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
      <Button
        variant="transparent"
        children="Redefinir senha"
        onPress={() => {}}
        style={styles.buttonForgotPassword}
      />
    </>
  );
}
