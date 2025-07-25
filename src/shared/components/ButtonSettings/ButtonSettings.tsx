import {
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { $imgBackground, $img, $buttonText } from "./ButtonSettings.Styled";

import Logout from "../../../assets/imgs/SettingsIcons/exit.png";
import Trash from "../../../assets/imgs/SettingsIcons/trash.png";

interface IButtonSettingsProps {
  button?: boolean;
  typeLogout?: boolean;
  typeTrash?: boolean;
  text: string;
  textOpacity?: boolean;
  onPress?: () => void
}

export function ButtonSettings({
  button,
  typeLogout,
  typeTrash,
  text,
  textOpacity,
  onPress
}: IButtonSettingsProps) {
  return (
    <>
      {button && typeLogout && (
        <TouchableOpacity style={$imgBackground} onPress={onPress}>
          <Image resizeMode="contain" style={$img} source={Logout} />
        </TouchableOpacity>
      )}
      {button && typeTrash && (
        <TouchableOpacity style={$imgBackground} onPress={onPress}>
          <Image resizeMode="contain" style={$img} source={Trash} />
        </TouchableOpacity>
      )}
      {textOpacity ? (
        <TouchableOpacity onPress={onPress}>
          {text && <Text style={$buttonText}>{text}</Text>}
        </TouchableOpacity>
      ) : (
        text && <Text style={$buttonText}>{text}</Text>
      )}
    </>
  );
}
