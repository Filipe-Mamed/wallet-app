import { Text } from "react-native";
import { styles } from "./ButtonGoogle.Styled";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Image } from "react-native";

interface ITitleProps extends RectButtonProps{
    title: string
}

export function ButtonSocialGoogle({title, ...rest}: ITitleProps) {
  return (
    <RectButton style={styles.button} {...rest}>
        <Image resizeMode="contain" style={styles.buttonImg} source={require("../../../assets/imgs/GoogleImg/google.png")}/>
        <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
}
