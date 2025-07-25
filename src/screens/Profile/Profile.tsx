import { Text, View } from "react-native";
import { $container } from "./Profile.Styled";
import { Header } from "../../shared/components";

import Back from "../../assets/imgs/botão-voltar.png";

export function Profile() {

  return (
    <View style={$container}>
      <Header
        imgBack={{ source: Back, style: { tintColor: "#45197D" } }}
        nameRight="Perfil"
      />
      <Text style={{textAlign: "center", marginTop: 300}}>Profile</Text>
    </View>
  );
}
