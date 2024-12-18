import { StyleSheet, View } from "react-native";
import React from "react";

const CardLoading = () => {
  return (
    <View className="p-4 bg-background flex-1 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <View
          key={index}
          className="w-full flex flex-row items-center gap-5 p-3 rounded-2xl bg-surface animate-pulse"
        >
          {/* Circle Placeholder */}
          <View className="w-16 h-16 bg-gray-300 rounded-full" />
          <View className="flex-1">
            {/* Title Placeholder */}
            <View className="h-4 bg-gray-300 w-1/2 rounded-md mb-2" />
            {/* Description Placeholder */}
            <View className="h-3 bg-gray-300 w-full rounded-md mb-1" />
            <View className="h-3 bg-gray-300 w-3/4 rounded-md" />
          </View>
        </View>
      ))}
    </View>
  );
};

export default CardLoading;
