import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  $financeIcons,
  $icons,
  $iconNames,
  $name,
  $shadowButton,
  $botao,
} from "./FinanceIcons.Styled";

import Transfer from "../../../../assets/imgs/IconsWallet/transferencia-de-dinheiro.png";
import Payment from "../../../../assets/imgs/IconsWallet/pagar.png";
import Receive from "../../../../assets/imgs/IconsWallet/receber-dinheiro.png";
import ToAdd from "../../../../assets/imgs/IconsWallet/botao-adicionar.png";

export function FinanceIcons() {
  return (
    <View style={$financeIcons}>
      <View style={$botao}>
        <View style={$iconNames}>
          <TouchableOpacity style={$shadowButton}>
            <Image style={$icons} source={Transfer} />
          </TouchableOpacity>
          <Text style={$name}>Transferência</Text>
        </View>
        <View style={$iconNames}>
          <TouchableOpacity style={$shadowButton}>
            <Image style={$icons} source={Payment} />
          </TouchableOpacity>
          <Text style={$name}>Pagamento</Text>
        </View>
        <View style={$iconNames}>
          <TouchableOpacity style={$shadowButton}>
            <Image style={$icons} source={Receive} />
          </TouchableOpacity>
          <Text style={$name}>Receber</Text>
        </View>
        <View style={$iconNames}>
          <TouchableOpacity style={$shadowButton}>
            <Image style={$icons} source={ToAdd} />
          </TouchableOpacity>
          <Text style={$name}>Mais Opções</Text>
        </View>
      </View>
    </View>
  );
}
