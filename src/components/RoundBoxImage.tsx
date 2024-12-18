import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface RoundBoxImageProps {
  imageSource?: string;
  categoryName?: string;
}

const RoundBoxImage = ({ imageSource,categoryName }: RoundBoxImageProps) => {
  return (
    <View className="items-center">
      <View className="w-20 h-20 bg-[#f5e17e] rounded-full overflow-hidden">
        <Image 
          source={{ 
            uri: imageSource 
          }}
          style={{ width: "100%", height: "100%"}}
        />
      </View>
      <Text className={`${categoryName ? "text-textPrimary font-medium capitalize" : "hidden"}`}>{categoryName}</Text>
    </View>
  );
};

export default RoundBoxImage;
