import { Text } from "react-native";
import { $button, $buttonImg, $buttonText } from "./ButtonGoogle.Styled";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Image } from "react-native";

interface ITitleProps extends RectButtonProps {
  title: string;
}

export function ButtonSocialGoogle({ title, ...rest }: ITitleProps) {
  return (
    <RectButton style={$button} {...rest}>
      <Image
        resizeMode="contain"
        style={$buttonImg}
        source={require("../../../assets/imgs/GoogleImg/google.png")}
      />
      <Text style={$buttonText}>{title}</Text>
    </RectButton>
  );
}
