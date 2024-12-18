import { Text, View } from "react-native";
import React from "react";
import RoundBoxImage from "./RoundBoxImage";

const CardBox = ({ image, name }: any) => {
  return (
    <View className="w-full flex flex-row items-center gap-5 p-3 rounded-2xl bg-surface">
      <RoundBoxImage imageSource={image} />
      <View className="flex-1">
        <Text className="font-semibold text-lg" numberOfLines={1}>
          {name}
        </Text>
        <Text className="text-base leading-5" numberOfLines={2}>
          Lorem ipsum, dolor sit consectetur adipisicing elit. Molestias, id a
          repudiandae.
        </Text>
      </View>
    </View>
  );
};

export default CardBox;
