import { useCallback, useState } from "react";
import {
  View,
  TextInput,
  ImageSourcePropType,
  Image,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Input.Styled";

interface IInputProps extends TextInputProps {
  name: string;
  leftImg?: ImageSourcePropType;
  rightImg?: ImageSourcePropType;
  showPasswordToggle?: boolean;
}

export function Input({
  name,
  rightImg,
  leftImg,
  showPasswordToggle,
  ...rest
}: IInputProps) {
  const [security, setSecurity] = useState(showPasswordToggle);

  const handleOnPress = useCallback(() => {
    setSecurity((prev) => !prev);
  }, [security]);

  const trueOrFalse = useCallback((): ImageSourcePropType => {
    if (security) {
      return require("../../../assets/imgs/InputsImgs/olho-fechado.png")
    } else {
      return require("../../../assets/imgs/InputsImgs/olho-aberto.png")
    }
  }, [security])

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
        <TextInput
          style={styles.input}
          placeholderTextColor="#808080"
          secureTextEntry={security}
          {...rest}
        />
        {showPasswordToggle && (
          <TouchableOpacity onPress={handleOnPress}>
            {rightImg && (
              <Image
                resizeMode="contain"
                style={styles.inputImg}
                source={trueOrFalse()}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
