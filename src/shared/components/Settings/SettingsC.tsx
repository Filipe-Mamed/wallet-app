import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import {
  $container,
  $containerProfile,
  $imgBackground,
  $img,
  $opacityButton,
  $textProfile,
  $proximo,
} from "./SettingsC.Styled";

import Next from "../../../assets/imgs/SettingsIcons/proximo.png";

interface ISettingsCProps {
  imgLeft?: ImageSourcePropType;
  nameText: string;
  rightArrow: boolean;
  onPress?: () => void;
}

export function SettingsC({
  imgLeft,
  nameText,
  rightArrow,
  onPress,
}: ISettingsCProps) {
  return (
    <View style={$containerProfile}>
      <View style={$containerProfile}>
        {imgLeft && (
          <View style={$imgBackground}>
            <Image resizeMode="contain" source={imgLeft} style={$img} />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={$opacityButton}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text style={$textProfile}>{nameText}</Text>
        {rightArrow && (
          <View style={$containerProfile}>
            <Image resizeMode="contain" source={Next} style={$proximo} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
