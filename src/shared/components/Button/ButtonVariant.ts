import { RFValue } from "react-native-responsive-fontsize";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

interface ButtonStyles {
  button: ViewStyle;
  title?: TextStyle;
  img?: ImageStyle;
}

export interface ButtonStatus {
  enabled: ButtonStyles;
  disabled: ButtonStyles;
}

const baseImg = {
  width: RFValue(26),
  height: RFValue(26),
  marginRight: RFValue(9),
  marginBottom: RFValue(2),
};

const buttonPurple: ButtonStatus = {
  enabled: {
    button: {
      backgroundColor: "#800080",
    },
    title: {
      color: "#FFFFFF",
    },
    img: baseImg,
  },
  disabled: {
    button: {
      backgroundColor: "#800080",
      opacity: 0.5,
    },
    title: {
      color: "#FFFFFF",
    },
    img: baseImg,
  },
};

const buttonOutline: ButtonStatus = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: RFValue(2),
      borderColor: "#800080",
    },
    title: {
      color: "#800080",
    },
    img: baseImg,
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      borderColor: "#800080",
      borderWidth: RFValue(2),
      opacity: 0.5,
    },
    title: {
      color: "#800080",
    },
    img: baseImg,
  },
};

const buttonBlack: ButtonStatus = {
  enabled: {
    button: {
      backgroundColor: "#000000",
    },
    title: {
      color: "#FFFFFF",
    },
    img: baseImg,
  },
  disabled: {
    button: {
      backgroundColor: "#000000",
      opacity: 0.5,
    },
    title: {
      color: "#FFFFFF",
    },
    img: baseImg,
  },
};

const buttonTransparent: ButtonStatus = {
  enabled: {
    button: {
      backgroundColor: "transparent",
    },
    img: baseImg,
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      opacity: 0.5,
    },
    img: baseImg,
  },
};

export const variants = {
  purple: buttonPurple,
  outline: buttonOutline,
  black: buttonBlack,
  transparent: buttonTransparent,
};
