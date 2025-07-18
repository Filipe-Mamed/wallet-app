import { Text } from "react-native";
import { styles } from "./ButtonFacebook.Styled";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Fontisto from '@expo/vector-icons/Fontisto'

interface ITitleProps extends RectButtonProps{
    title: string
}

export function ButtonSocialFacebook({title, ...rest}: ITitleProps) {
  return (
    <RectButton style={styles.button} {...rest}>
        <Fontisto name="facebook" size={25} color="white" />
        <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
}
