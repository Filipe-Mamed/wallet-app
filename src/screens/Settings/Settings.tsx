import {
  Text,
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { $container, $body, $footer } from "./Settings.Styled";
import { ButtonSettings, Header } from "../../shared/components";
import { SettingsC } from "../../shared/components";

import BotãoVoltar from "../../assets/imgs/botão-voltar.png";

import Profile from "../../assets/imgs/SettingsIcons/profile.png";
import Notifications from "../../assets/imgs/SettingsIcons/notifications.png";
import Wallet from "../../assets/imgs/SettingsIcons/wallet.png";
import LoginSettings from "../../assets/imgs/SettingsIcons/login-settings.png";
import ServiceCenter from "../../assets/imgs/SettingsIcons/service-center.png";
import { useNavigation } from "@react-navigation/native";

export function Settings() {
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate("Screen", { screen: "Profile" });
  };

  return (
    <View style={$container}>
      <Header nameLeft="Configurações" />
      <View style={$body}>
        <SettingsC
          imgLeft={Profile}
          nameText="Perfil"
          rightArrow
          onPress={handleProfile}
        />
        <SettingsC imgLeft={Notifications} nameText="Notificações" rightArrow />
        <SettingsC imgLeft={Wallet} nameText="Minha Carteira" rightArrow />
        <SettingsC
          imgLeft={LoginSettings}
          nameText="Configurações de Login"
          rightArrow
        />
        <SettingsC
          imgLeft={ServiceCenter}
          nameText="Central de Serviço"
          rightArrow
        />
      </View>
      <View style={$footer}>
        <ButtonSettings
          button
          typeLogout
          text="Sair"
          onPress={() => console.log("Botão de sair clicado")}
        />
      </View>
    </View>
  );
}
