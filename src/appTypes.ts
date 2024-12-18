interface Nutrient {
    name: string;
    amount: number;
    unit: string;
}

export interface Recipe {
    id: number;
    image: string;
    imageType: string;
    title: string;
}

export type FoodRecipesResponse = {
    results: Recipe[];
    totalResults: number;
    nutrition: {
        nutrients: Nutrient[];
    };
}