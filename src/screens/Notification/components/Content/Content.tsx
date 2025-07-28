import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import {
  $top,
  $bottom,
  $title,
  $flatList,
  $contentList,
  $imgStyle,
  $rowStyle,
  $subTitle,
  $type,
} from "./Content.Styled";

import { new_notifications } from "../../../../shared/utils";
import { recents_notifications } from "../../../../shared/utils";

import UpArrow from "../../../../assets/imgs/up-arrow.png";
import DownArrow from "../../../../assets/imgs/down-arrow.png";

interface IContentProps {
  top?: boolean;
  bottom?: boolean;
  title: string;
}

export function Content({ top, bottom, title }: IContentProps) {
  const [arrowStates, setArrowStates] = useState<Record<string, boolean>>({});

  function handleColor(id: string) {
    setArrowStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <>
      {top && (
        <View style={$top}>
          <Text style={$title}>{title}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={new_notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={$flatList}>
                <View style={$rowStyle}>
                  <View style={$contentList}>
                    <Text style={$type}>{item.datetime}</Text>
                    <Text style={$subTitle}>{item.title}</Text>
                    <Text style={$type}>{item.type}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleColor(item.id)}>
                    <Image
                      source={arrowStates[item.id] ? DownArrow : UpArrow}
                      style={[
                        $imgStyle,
                        {
                          tintColor: arrowStates[item.id]
                            ? "#FF0000"
                            : "#228B22",
                        },
                      ]}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {bottom && (
        <View style={$bottom}>
          <Text style={$title}>{title}</Text>
          <FlatList
            contentContainerStyle={{ paddingBottom: 470 }}
            showsVerticalScrollIndicator={false}
            data={recents_notifications}
            renderItem={({ item }) => (
              <View style={$flatList}>
                <View style={$rowStyle}>
                  <View style={$contentList}>
                    <Text style={$type}>{item.datetime}</Text>
                    <Text style={$subTitle}>{item.title}</Text>
                    <Text style={$type}>{item.type}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={DownArrow}
                      style={$imgStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
}
