import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { foodDetailsData } from "../API/recipeFinderAPI";
import SmallButtonTypeBox from "../components/SmallButtonTypeBox";

const FireImage = require("@/src/assets/images/fire.png");
const ClockImage = require("@/src/assets/images/clock.png");
const DishImage = require("@/src/assets/images/dish.png");

const foodDetails = () => {
  const [selected, setSelected] = useState("ingredients");
  const { recipeId } = useLocalSearchParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["foodDetails", recipeId],
    queryFn: () => foodDetailsData(recipeId),
  });

  const caloriesInfo = data?.nutrition?.nutrients?.find(
    (nutrient: any) => nutrient?.name === "Calories"
  );
  

  if (isLoading) {
    return (
      <View className="flex-1 bg-background justify-center items-center">
        <ActivityIndicator size="large" color="#00b894" />
        <Text>Loading recipe details...</Text>
      </View>
    );
  }

  const {
    title,
    image,
    readyInMinutes,
    servings,
    extendedIngredients,
    instructions,
  } = data;

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
      <View className="w-full h-[30vh]">
        {/* Recipe Image */}
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 300, resizeMode: "cover" }}
        />
      </View>

        <View className="px-3 min-h-[70vh] rounded-t-[30px] bg-white">
          <View className="justify-center items-center">
            <Text className="text-2xl font-bold text-center mt-3 text-textPrimary">
                {title}
            </Text>

            {/* Recipe Details */}
            <View className="flex-row gap-4 items-center mt-4">
              <SmallButtonTypeBox img={FireImage} value={caloriesInfo.amount || "N/A"} />
              <SmallButtonTypeBox img={ClockImage} value={readyInMinutes || "N/A"} />
              <SmallButtonTypeBox img={DishImage} value={servings || "N/A"} />
            </View>
          </View>

          <View className="items-center mt-5">
            <View className="p-2 bg-surface w-80 rounded-xl flex-row">
              <TouchableOpacity
                onPress={() => setSelected("ingredients")}
                className={`w-1/2 rounded-xl py-2 ${selected === "ingredients" ? "bg-white" : "bg-transparent"}`}
              >
                <Text className="text-center font-medium">
                  Ingredients
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setSelected("instructions")}
                className={`w-1/2 rounded-xl py-2 ${selected === "instructions" ? "bg-white" : "bg-transparent"}`}
              >
                <Text className="text-center font-medium">
                  Instructions
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Ingredients */}
          {selected === "ingredients" && (
            <View className="mt-4 bg-surface p-3 rounded-xl">
              {extendedIngredients.map((ingredient:any, index:number) => (
                  <View key={index} className="my-1 rounded-xl">
                    <Text className="text-lg leading-5 text-[#000] font-medium">
                      {index + 1}. {ingredient.original}
                    </Text>
                  </View>
              ))}
            </View>
          )}

          {/* Instructions */}
          {selected === "instructions" && (
            <View className="bg-surface p-3 mt-4 rounded-xl">
              <Text className="text-lg text-[#2d3436] font-medium">
                {instructions.replace(/<[^>]+>/g, "")}
              </Text>
            </View>
          )}

          <Text className="text-center my-3">Happy Cooking😊</Text>
        </View>
    </ScrollView>
  );
};

export default foodDetails;
