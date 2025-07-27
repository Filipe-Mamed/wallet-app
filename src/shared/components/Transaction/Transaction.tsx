import {
  View,
  Text,
  FlatList,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
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
import { transaction } from "../../utils";
import { Button } from "..";

interface ITransactionProps {
  topic?: string;
  title?: string;
  onPress?: () => void;
  limit?: number;
  paddingBottom?: StyleProp<ViewStyle>;
}

export function Transaction({
  topic,
  title,
  onPress,
  limit,
  paddingBottom,
}: ITransactionProps) {
  function getLimitedTransaction() {
    if (limit) {
      return transaction.slice(0, limit);
    } else {
      return transaction;
    }
  }

  function hasShadowIcon(title: string): boolean {
    const shadowIcons = ["Amazon", "Ebay", "Nike"];
    return shadowIcons.some((icon) => title.includes(icon));
  }

  return (
    <View style={$container}>
      <View style={$transaction}>
        <Text style={$textTransaction}>{topic}</Text>
        <Button
          variant="transparent"
          children={title}
          onPress={() => onPress && onPress()}
          style={$button}
        />
      </View>
      <FlatList
        data={getLimitedTransaction()}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={paddingBottom}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={$containerLista}>
              {hasShadowIcon(item.title) ? (
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
