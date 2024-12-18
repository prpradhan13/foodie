import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SmallButtonTypeBox = ({ img, value }: any) => {
  return (
    <View className='w-[70px] h-[120px] bg-purple-500 p-2 rounded-full'>
        <View className='h-1/2 bg-white justify-center items-center rounded-full'>
            <Image 
                source={ img }
                style={{ width: 35, height: 35 }}
                resizeMode="contain"
            />
        </View>
        <View className='h-1/2 justify-center items-center'>
            <Text className='font-semibold text-white text-lg'>{value}</Text>
        </View>
    </View>
  )
}

export default SmallButtonTypeBox;