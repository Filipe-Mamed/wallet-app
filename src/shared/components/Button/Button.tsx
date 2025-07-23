import React from "react";
import {
  View,
  ViewProps,
  Text,
  Image,
  Pressable,
  ImageProps,
  ActivityIndicator,
} from "react-native";
import { $container, $content, $iconImg, $text } from "./Button.Styled";
import { variants } from "./ButtonVariant";

interface IImageIcon {
  source: ImageProps["source"];
  style?: ImageProps["style"];
}

interface IButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  imgIcon?: IImageIcon
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "purple" | "outline" | "black" | "transparent";
  style?: ViewProps["style"];
}

export function Button({
  children,
  onPress,
  imgIcon,
  isLoading,
  disabled,
  variant = "purple",
  style,
}: IButtonProps) {
  const color = "#808080";
  const button_variant = variants[variant];
  const button_styles = disabled
    ? button_variant.disabled
    : button_variant.enabled;

  return (
    <Pressable
      disabled={isLoading || disabled}
      onPress={onPress}
      style={({ pressed }) => [
        button_styles.button,
        $container,
        style,
        pressed && { opacity: 0.6 },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={color}></ActivityIndicator>
      ) : (
        <View style={[$content, !children && { justifyContent: "center" }]}>
          {imgIcon && (
            <Image
              resizeMode="contain"
              source={imgIcon.source}
              style={[
                button_styles.img,
                children ? button_styles.img : $iconImg, imgIcon.style
              ]}
            />
          )}
          {children && (
            <Text style={[button_styles.title, $text, style]}>{children}</Text>
          )}
        </View>
      )}
    </Pressable>
  );
}
