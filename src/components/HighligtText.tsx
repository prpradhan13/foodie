import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HighlightTextProps {
  showText: string;
}

const HighligtText = ({showText}: HighlightTextProps) => {
  return (
    <View className="flex-row items-center justify-center">
      {/* Left Line */}
      <View className="flex-1 h-[1px] bg-textPrimary" />

      {/* Text */}
      <Text className="mx-4 text-lg tracking-widest font-semibold text-textPrimary uppercase"> {showText} </Text>

      {/* Right Line */}
      <View className="flex-1 h-[1px] bg-textPrimary" />
    </View>
  )
}

export default HighligtText;