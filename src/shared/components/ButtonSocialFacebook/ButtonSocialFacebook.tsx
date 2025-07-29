import { Text } from "react-native";
import { $button, $buttonText } from "./ButtonFacebook.Styled";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Fontisto from "@expo/vector-icons/Fontisto";

interface ITitleProps extends RectButtonProps {
  title: string;
}

export function ButtonSocialFacebook({ title, ...rest }: ITitleProps) {
  return (
    <RectButton style={$button} {...rest}>
      <Fontisto name="facebook" size={25} color="white" />
      <Text style={$buttonText}>{title}</Text>
    </RectButton>
  );
}
