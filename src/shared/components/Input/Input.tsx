import {
  View,
  TextInput,
  ImageSourcePropType,
  Image,
  TextInputProps
} from "react-native";
import { styles } from "./Input.Styled";

interface IInputProps extends TextInputProps {
  name: string;
  leftImg?: ImageSourcePropType;
  rightImg?: ImageSourcePropType;
}

export function Input({ name, rightImg, leftImg, ...rest }: IInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {leftImg && (
          <Image
            resizeMode="contain"
            style={styles.inputImg}
            source={leftImg}
          />
        )}
        <TextInput style={styles.input} placeholderTextColor="#808080" {...rest} />
        {rightImg && (
          <Image
            resizeMode="contain"
            style={styles.inputImg}
            source={rightImg}
          />
        )}
      </View>
    </View>
  );
}
