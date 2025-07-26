import { Text, View, Image, TouchableOpacity } from "react-native";
import {
  $container,
  $avatar,
  $contentUser,
  $nameUser,
  $imgEdit,
  $body,
  $footer,
} from "./Profile.Styled";
import { ButtonSettings, Header, SettingsC } from "../../shared/components";

import Back from "../../assets/imgs/botão-voltar.png";
import Avatar from "../../assets/imgs/foto-ilustrativa.jpg";
import Edit from "../../assets/imgs/editar.png";

export function Profile() {
  return (
    <View style={$container}>
      <Header
        imgBack={{ source: Back, style: { tintColor: "#45197D" } }}
        nameRight="Perfil"
      />
      <View>
        <Image source={Avatar} resizeMode="cover" style={$avatar} />
        <View style={$contentUser}>
          <Text style={$nameUser}>Fulano</Text>
          <TouchableOpacity activeOpacity={0.3}>
            <Image source={Edit} style={$imgEdit} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={$body}>
        <SettingsC nameText="Conta conectada" rightArrow />
        <SettingsC nameText="Privacidade e segurança" rightArrow />
        <SettingsC nameText="Configurações de login" rightArrow />
        <SettingsC nameText="Central de serviço" rightArrow />
      </View>
      <View style={$footer}>
        <ButtonSettings button typeTrash text="Deletar Conta" />
      </View>
    </View>
  );
}
