import { View, Text, Image, ImageProps, ImageSourcePropType } from "react-native";
import {
  $container,
  $contentHeader,
  $header,
  $avatar,
  $appName,
  $status,
} from "./Header.Styled";
import { Button } from "../Button/Button";

interface IHeaderProps {
  name?: string;
  status?: string;
  avatar?: ImageSourcePropType
  imgBack?: {
    source: ImageProps["source"];
    style?: ImageProps["style"];
  };
  onPress?: () => void;
}

export function Header({
  name,
  status,
  imgBack,
  avatar,
  onPress,
}: IHeaderProps) {
  return (
    <View style={$container}>
      <View style={$contentHeader}>
        <View style={$header}>
          {name && <Text style={$appName}>{name}</Text>}
          {status && <Text style={$status}>{status}</Text>}
          {imgBack && (
            <Button
              onPress={() => onPress}
              variant="transparent"
              imgIcon={imgBack}
            />
          )}
        </View>
        <Image
          resizeMode="cover"
          style={$avatar}
          source={avatar}
        />
      </View>
    </View>
  );
}
