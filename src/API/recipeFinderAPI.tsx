import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const foodRecipeData = async (foodName: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/recipes/complexSearch`,
            {params: {
                query: foodName,
                number: 8,
                apiKey: API_KEY
            }} 
        )
        return response.data || [];

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const foodDetailsData = async (recipeId: any) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/recipes/${recipeId}/information`,
            {params: {
                apiKey: API_KEY,
                includeNutrition: true
            }} 
        )
        return response.data || [];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getDataByCuisine = async (cuisineName: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/recipes/cuisine`,
            {params: {
                cuisine: {cuisineName},
                apiKey: API_KEY
            }} 
        )
        return response.data || [];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getDataByCategory = async (selected: string) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/recipes/complexSearch`,
            {params: {
                type: selected,
                apiKey: API_KEY
            }} 
        )
        return response.data || [];
    } catch (error) {
        console.log(error);
        return null;
    }
}