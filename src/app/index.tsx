import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "@/src/components/SearchBar";
import { bannerImages, categoryForHome, whatInMindData } from "@/src/data";
import HighligtText from "@/src/components/HighligtText";
import RoundBoxImage from "@/src/components/RoundBoxImage";
import { router } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { foodRecipeData, getDataByCuisine } from "@/src/API/recipeFinderAPI";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [selectedFood, setSelecetedFood] = useState<string | null>(null)
  // Extract unique categories
  // const uniqueCategories = Array.from(
  //   new Set(breakfastFoods.map((item) => item.category))
  // );

  const getDataQuery = useQuery({
    queryKey: [`foodRecipes_${selectedFood}`],
    queryFn: () => foodRecipeData(selectedFood!),
    enabled: !!selectedFood,
  });

  const cuisineDataQuery = useQuery({
    queryKey: [`foodRecipes_${selectedFood}`],
    queryFn: () => getDataByCuisine(selectedFood!),
    enabled: !!selectedFood,
  });

  return (
    <SafeAreaView className="flex-1 bg-background  p-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <SearchBar showPlaceholder="What's in your mind..." />

        {/* Banner */}
        <View className="mt-8">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {bannerImages.map((item) => (
              <Pressable
                key={item.id}
                className="w-96 h-60 rounded-2xl bg-surface overflow-hidden"
                onPress={() => {
                  setSelecetedFood(item.cuisineName)
                  router.push(`/foodRecipe/${item?.cuisineName}`)
                }}
              >
                <Image
                  source={{ uri: item.imgPath }}
                  style={{ width: "100%", height: "100%" }}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Food Recipe */}
        <View className="mt-8">
          <HighligtText showText="What's your mood?" />
          <View className="flex flex-row flex-wrap gap-x-7 gap-y-4 justify-between py-5">
            {whatInMindData.map((item, index) => (
              <TouchableOpacity 
                key={`${item.name}_${index}`}
                onPress={() => {
                  setSelecetedFood(item?.name);
                  router.push(`/foodRecipe/${item?.name}`)
                }}
              >
                <RoundBoxImage
                  imageSource={item.imgPath}
                  categoryName={item.name}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Category */}
        <View className="mt-8">
          <HighligtText showText="Category" />
          <View className="flex flex-row py-5 justify-center gap-7">
            {categoryForHome.map((cate, i) => (
              <TouchableOpacity
                key={`${cate.name}_${i}`}
                onPress={() =>
                  router.push(`/choiceCategory/${cate.name}`)
                }
              >
                <RoundBoxImage
                  imageSource={cate.imgPath}
                  categoryName={cate.name}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* What is in fridge */}
        {/* <View className="mt-6 w-full">
          <SearchBar showPlaceholder="What's in your fridge?" />
          <Text className="text-textSecondary font-medium text-center mt-2 px-2">
            In the above search field right what ingredients in your refrigerator or which are available now to cook.
          </Text>
        </View> */}

        <Text className="text-center my-5 font-semibold tracking-widest text-textSecondary">
          Happy meal ☺️
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
