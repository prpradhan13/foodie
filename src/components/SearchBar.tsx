import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TextField from "./inputs/TextField";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useQuery } from "@tanstack/react-query";
import { foodRecipeData } from "../API/recipeFinderAPI";
import CardLoading from "./skeleton/CardLoading";
import { router } from "expo-router";
import CardBox from "./CardBox";

interface SearchBarProps {
  showPlaceholder: string;
}

const SearchBar = ({ showPlaceholder }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 300);

    setOverlayActive(searchValue !== ""); // Activate overlay if there’s input

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`search_recipe_${debouncedValue}`],
    queryFn: () => foodRecipeData(debouncedValue),
  });

  return (
    <View className="relative z-50">
      <View className="flex flex-row bg-surface rounded-xl px-4 py-2 items-center gap-2">
        <AntDesign name="search1" size={20} color="black" />
        <TextField
          placeholder={showPlaceholder}
          value={searchValue}
          onChangeText={(value) => setSearchValue(value)}
        />
      </View>

      {/* Overlay for Search Results */}
      {overlayActive && (
        <View className="absolute top-20 left-0 h-screen w-[95vw] bg-white/80 z-50">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            className=""
          >
            <Text style={styles.resultText}>
              Debounced Value: {debouncedValue}
            </Text>

            {isError ? (
              <View className="p-4 bg-background flex-1">
                <Text className="text-center text-red-500">
                  Error: {error?.message || "Failed to fetch data."}
                </Text>
              </View>
            ) : (
              <View>
                {isLoading ? (
                  <CardBox />
                ) : (
                  <>
                    {data?.results?.map((recipe: any) => (
                      <TouchableOpacity
                        key={recipe.id}
                        onPress={() => {
                          router.push({
                            pathname: "/foodDetails",
                            params: { recipeId: recipe.id },
                          });
                        }}
                        className="mb-6"
                      >
                        <CardBox image={recipe.image} name={recipe.title} />
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  resultsContainer: {
    padding: 16,
  },
  backgroundText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  resultText: {
    fontSize: 16,
    color: "black",
  },
});
