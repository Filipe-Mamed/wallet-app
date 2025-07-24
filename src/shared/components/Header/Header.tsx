import { View, Text, Image, ImageProps, ImageSourcePropType } from "react-native";
import {
  $container,
  $contentHeader,
  $header,
  $avatar,
  $appName,
  $appNameRight,
  $status,
} from "./Header.Styled";
import { Button } from "../Button/Button";

interface IImageIconBackProps {
  source: ImageProps["source"];
  style?: ImageProps["style"];
}

interface IHeaderProps {
  nameLeft?: string;
  nameRight?: string
  status?: string;
  avatar?: ImageSourcePropType
  imgBack?: IImageIconBackProps
  onPress?: () => void;
}

export function Header({
  nameLeft,
  nameRight,
  status,
  imgBack,
  avatar,
  onPress,
}: IHeaderProps) {
  return (
    <View style={$container}>
      <View style={$contentHeader}>
        <View style={$header}>
          {nameLeft && <Text style={$appName}>{nameLeft}</Text>}
          {status && <Text style={$status}>{status}</Text>}
          {imgBack && (
            <Button
              onPress={() => onPress}
              variant="transparent"
              imgIcon={imgBack}
            />
          )}
        </View>
        {nameRight && <Text style={$appNameRight}>{nameRight}</Text>}
        <Image
          resizeMode="cover"
          style={$avatar}
          source={avatar}
        />
      </View>
    </View>
  );
}
