import { Text } from "react-native";
import { Button } from "../../../../shared/components";
import { $textForgotPassword, $buttonForgotPassword } from "./ForgotPassword.Styled";

interface IForgotProps {
  onPress: () => void;
}

export function ForgotPassword({onPress}: IForgotProps) {
  return (
    <>
      <Text style={$textForgotPassword}>Esqueceu a senha?</Text>
      <Button
        variant="transparent"
        children="Redefinir senha"
        onPress={onPress}
        style={$buttonForgotPassword}
      />
    </>
  );
}
