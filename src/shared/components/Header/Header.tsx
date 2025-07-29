import {
  View,
  Text,
  Image,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  $container,
  $contentHeader,
  $header,
  $avatar,
  $appName,
  $appNameRight,
  $status,
  $flexRow,
} from "./Header.Styled";
import { Button } from "../Button/Button";

interface IImageIconBackProps {
  source: ImageProps["source"];
  style?: ImageProps["style"];
}

interface IHeaderProps {
  nameLeft?: string;
  nameRight?: string;
  status?: string;
  avatar?: ImageSourcePropType;
  imgBack?: IImageIconBackProps;
}

export function Header({
  nameLeft,
  nameRight,
  status,
  imgBack,
  avatar,
}: IHeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={$container}>
      <View style={$contentHeader}>
        <View style={$header}>
          {nameLeft && <Text style={$appName}>{nameLeft}</Text>}
          {status && <Text style={$status}>{status}</Text>}
          <View style={$flexRow}>
            {imgBack && (
              <Button
                onPress={handleGoBack}
                variant="transparent"
                imgIcon={imgBack}
                style={{ width: "auto"}}
              />
            )}
            {nameRight && <Text style={$appNameRight}>{nameRight}</Text>}
          </View>
        </View>
        <Image resizeMode="cover" style={$avatar} source={avatar} />
      </View>
    </View>
  );
}
