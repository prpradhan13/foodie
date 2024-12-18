import "../global.css";
import { Stack } from "expo-router";
import { capitalizeTitle } from "@/src/utils/CapitalizeTitle";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StatusBar } from "expo-status-bar"

export type FoodRecipeRouteParams = {
  query?: string;
};

export type ChoiceCategoryParams = {
  name?: string;
};

const queryClient = new QueryClient();

export const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar
        style={"dark"}
        backgroundColor="transparent"
      />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen
          name="foodRecipe/[query]"
          options={({ route }) => {
            const params = route.params as FoodRecipeRouteParams; // Cast params to your defined type
            return {
              headerTitle: capitalizeTitle(params.query),
              headerShadowVisible: false,
            };
          }}
        />

        <Stack.Screen
          name="choiceCategory/[name]"
          options={({ route }) => {
            const params = route.params as ChoiceCategoryParams;
            return {
              headerTitle: capitalizeTitle(params.name),
              headerShadowVisible: false,
            };
          }}
        />

        <Stack.Screen
          name="foodDetails"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </>
  );
}

export default function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout />
    </QueryClientProvider>
  )
}


