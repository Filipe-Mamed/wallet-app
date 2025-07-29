import { Text } from "react-native";
import { $button, $buttonImg, $buttonText } from "./ButtonGoogle.Styled";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Image } from "react-native";

import Google from "../../../assets/imgs/GoogleImg/google.png"

interface ITitleProps extends RectButtonProps {
  title: string;
}

export function ButtonSocialGoogle({ title, ...rest }: ITitleProps) {
  return (
    <RectButton style={$button} {...rest}>
      <Image
        resizeMode="contain"
        style={$buttonImg}
        source={Google}
      />
      <Text style={$buttonText}>{title}</Text>
    </RectButton>
  );
}
