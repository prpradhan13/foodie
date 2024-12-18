import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import CardBox from '@/src/components/CardBox'
import { useQuery } from '@tanstack/react-query'
import CardLoading from '@/src/components/skeleton/CardLoading'
import { FoodRecipesResponse } from '@/src/appTypes'
import { getDataByCategory } from '@/src/API/recipeFinderAPI'

const choiceCategory = () => {
    const { name } = useLocalSearchParams();

    const {data, isLoading, isError, error} = useQuery({
      queryKey: [`category_${name}`],
      queryFn: () => getDataByCategory(name),
    })
  
    if (isLoading) return <CardLoading />;
  
    if (isError) {
      return (
        <View className="p-4 bg-background flex-1">
          <Text className="text-center text-red-500">
            Error: {error?.message || 'Failed to fetch data.'}
          </Text>
        </View>
      );
    }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='p-4 bg-background flex-1'>
      {data?.results?.map((recipe: any) => (
        <TouchableOpacity 
          key={recipe.id} 
          onPress={() => {router.push({
            pathname: "/foodDetails",
            params: {recipeId: recipe.id}
          })}}
          className='mb-6'
        >
          <CardBox 
            image={recipe.image}
            name={recipe.title}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default choiceCategory;