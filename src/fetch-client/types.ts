import { SearchRecipes200Response } from '@/types/models/SearchRecipes200Response';

import { GetRandomRecipes200Response } from './../types/models/GetRandomRecipes200Response';
import { GetRecipeInformation200Response } from './../types/models/GetRecipeInformation200Response';

export type {
  GetRandomRecipes200Response,
  GetRecipeInformation200Response,
  SearchRecipes200Response,
};

export interface GetRandomRecipes200Args {
  params: Partial<{
    limitLicense: boolean;
    includeNutrition: boolean;
    includeTags: string[];
    excludeTags: string[];
    number: number;
  }>;
}

export interface SearchRecipes200Args {
  params: Partial<{
    query: string;
    cuisine: string;
    excludeCuisine: string;
    diet: string;
    intolerances: string;
    equipment: string;
    includeIngredients: string;
    excludeIngredients: string;
    type: string;
    instructionsRequired: boolean;
    fillIngredients: boolean;
    addRecipeInformation: boolean;
    addRecipeInstructions: boolean;
    addRecipeNutrition: boolean;
    author: string;
    tags: string;
    recipeBoxId: number;
    titleMatch: string;
    maxReadyTime: number;
    minServings: number;
    maxServings: number;
    ignorePantry: boolean;
    sort: string;
    sortDirection: string;
    minCarbs: number;
    maxCarbs: number;
    minProtein: number;
    maxProtein: number;
    minCalories: number;
    maxCalories: number;
    minFat: number;
    maxFat: number;
    minAlcohol: number;
    maxAlcohol: number;
    minCaffeine: number;
    maxCaffeine: number;
    minCopper: number;
    maxCopper: number;
    minCalcium: number;
    maxCalcium: number;
    minCholine: number;
    maxCholine: number;
    minCholesterol: number;
    maxCholesterol: number;
    minFluoride: number;
    maxFluoride: number;
    minSaturatedFat: number;
    maxSaturatedFat: number;
    minVitaminA: number;
    maxVitaminA: number;
    minVitaminC: number;
    maxVitaminC: number;
    minVitaminD: number;
    maxVitaminD: number;
    minVitaminE: number;
    maxVitaminE: number;
    minVitaminK: number;
    maxVitaminK: number;
    minVitaminB1: number;
    maxVitaminB1: number;
    minVitaminB2: number;
    maxVitaminB2: number;
    minVitaminB5: number;
    maxVitaminB5: number;
    minVitaminB3: number;
    maxVitaminB3: number;
    minVitaminB6: number;
    maxVitaminB6: number;
    minVitaminB12: number;
    maxVitaminB12: number;
    minFiber: number;
    maxFiber: number;
    minFolate: number;
    maxFolate: number;
    minFolicAcid: number;
    maxFolicAcid: number;
    minIodine: number;
    maxIodine: number;
    minIron: number;
    maxIron: number;
    minMagnesium: number;
    maxMagnesium: number;
    minManganese: number;
    maxManganese: number;
    minPhosphorus: number;
    maxPhosphorus: number;
    minPotassium: number;
    maxPotassium: number;
    minSelenium: number;
    maxSelenium: number;
    minSodium: number;
    maxSodium: number;
    minSugar: number;
    maxSugar: number;
    minZinc: number;
    maxZinc: number;
    offset: number;
    number: number;
    limitLicense: number;
  }>;
}

export const pickingParams = [
  'query',
  'cuisine',
  'excludeCuisine',
  'diet',
  'intolerances',
  'equipment',
  'includeIngredients',
  'excludeIngredients',
  'type',
  'instructionsRequired',
  'fillIngredients',
  'addRecipeInformation',
  'addRecipeInstructions',
  'addRecipeNutrition',
  'author',
  'tags',
  'recipeBoxId',
  'titleMatch',
  'maxReadyTime',
  'minServings',
  'maxServings',
  'ignorePantry',
  'sort',
  'sortDirection',
  'minCarbs',
  'maxCarbs',
  'minProtein',
  'maxProtein',
  'minCalories',
  'maxCalories',
  'minFat',
  'maxFat',
  'minAlcohol',
  'maxAlcohol',
  'minCaffeine',
  'maxCaffeine',
  'minCopper',
  'maxCopper',
  'minCalcium',
  'maxCalcium',
  'minCholine',
  'maxCholine',
  'minCholesterol',
  'maxCholesterol',
  'minFluoride',
  'maxFluoride',
  'minSaturatedFat',
  'maxSaturatedFat',
  'minVitaminA',
  'maxVitaminA',
  'minVitaminC',
  'maxVitaminC',
  'minVitaminD',
  'maxVitaminD',
  'minVitaminE',
  'maxVitaminE',
  'minVitaminK',
  'maxVitaminK',
  'minVitaminB1',
  'maxVitaminB1',
  'minVitaminB2',
  'maxVitaminB2',
  'minVitaminB5',
  'maxVitaminB5',
  'minVitaminB3',
  'maxVitaminB3',
  'minVitaminB6',
  'maxVitaminB6',
  'minVitaminB12',
  'maxVitaminB12',
  'minFiber',
  'maxFiber',
  'minFolate',
  'maxFolate',
  'minFolicAcid',
  'maxFolicAcid',
  'minIodine',
  'maxIodine',
  'minIron',
  'maxIron',
  'minMagnesium',
  'maxMagnesium',
  'minManganese',
  'maxManganese',
  'minPhosphorus',
  'maxPhosphorus',
  'minPotassium',
  'maxPotassium',
  'minSelenium',
  'maxSelenium',
  'minSodium',
  'maxSodium',
  'minSugar',
  'maxSugar',
  'minZinc',
  'maxZinc',
  // 'offset',
  'number',
  'limitLicense',
  //custom
  'page',
];

export interface GetRecipeInformation200Args {
  params: {
    id: number | string;
    includeNutrition?: boolean;
    addWinePairing?: boolean;
    addTasteData?: boolean;
  };
}
