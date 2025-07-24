import { useCallback, useState } from "react";
import {
  View,
  TextInput,
  ImageSourcePropType,
  Image,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { $container, $inputContainer, $input, $inputImg } from "./Input.Styled";

import OpenEye from "../../../assets/imgs/InputsImgs/olho-aberto.png";
import EyeClosed from "../../../assets/imgs/InputsImgs/olho-fechado.png";

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
      return EyeClosed;
    } else {
      return OpenEye;
    }
  }, [security]);

  return (
    <View style={$container}>
      <View style={$inputContainer}>
        {leftImg && (
          <Image resizeMode="contain" style={$inputImg} source={leftImg} />
        )}
        <TextInput
          style={$input}
          placeholderTextColor="#808080"
          secureTextEntry={security}
          {...rest}
        />
        {showPasswordToggle && (
          <TouchableOpacity onPress={handleOnPress}>
            {rightImg && (
              <Image
                resizeMode="contain"
                style={$inputImg}
                source={trueOrFalse()}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
