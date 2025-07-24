import { View, Text, FlatList, Image } from "react-native";
import {
  $container,
  $transaction,
  $textTransaction,
  $button,
  $containerLista,
  $imgShadow,
  $imgIcon,
  $infoTextContainer,
  $title,
  $subTitle,
  $price,
} from "./Transaction.Styled";
import { transaction } from "../../../../shared/utils";
import { Button } from "../../../../shared/components";

export function Transaction() {
  return (
    <View style={$container}>
      <View style={$transaction}>
        <Text style={$textTransaction}>Últimas Transações</Text>
        <Button
          variant="transparent"
          children="Ver tudo"
          onPress={() => console.log("Botão pressionado")}
          style={$button}
        />
      </View>
      <FlatList
        data={transaction}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={$containerLista}>
              {item.title.includes("Amazon") ? (
                <View style={[$imgShadow]}>
                  <Image style={$imgIcon} source={item.imgIcon} />
                </View>
              ) : (
                <Image style={$imgIcon} source={item.imgIcon} />
              )}

              <View style={$infoTextContainer}>
                <Text style={$title}>{item.title}</Text>
                <Text style={$subTitle}>{item.subTitle}</Text>
              </View>
              <Text style={$price}>R$ {item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
