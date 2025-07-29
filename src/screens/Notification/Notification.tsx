import { Text, View } from "react-native";
import { $container, $body } from "./Notification.Styled";
import { Header } from "../../shared/components";
import { Content } from "./components/Content";

export function Notification() {
  return (
    <View style={$container}>
      <Header nameLeft="Notificações" />
      <View style={$body}>
        <Content top title="Novo" />
        <Content bottom title="Recente" />
      </View>
    </View>
  );
}
