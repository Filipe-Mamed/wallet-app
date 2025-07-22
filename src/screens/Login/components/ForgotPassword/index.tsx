import { Text, View } from "react-native";
import { Button } from "../../../../shared/components";
import { styles } from "./ForgotPassword.Styled";

interface IForgotProps {
  onPress: () => void;
}

export function ForgotPassword({onPress}: IForgotProps) {
  return (
    <>
      <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
      <Button
        variant="transparent"
        children="Redefinir senha"
        onPress={onPress}
        style={styles.buttonForgotPassword}
      />
    </>
  );
}
