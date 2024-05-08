/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what\'s in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * OpenAPI spec version: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetRecipeInformation200ResponseExtendedIngredientsInner } from '../models/GetRecipeInformation200ResponseExtendedIngredientsInner';
import { GetRecipeInformation200ResponseWinePairing } from '../models/GetRecipeInformation200ResponseWinePairing';

export class GetRecipeInformationBulk200ResponseInner {
  'id': number;
  'title': string;
  'image': string;
  'imageType': string;
  'servings': number;
  'readyInMinutes': number;
  'license': string;
  'sourceName': string;
  'sourceUrl': string;
  'spoonacularSourceUrl': string;
  'aggregateLikes': number;
  'healthScore': number;
  'spoonacularScore': number;
  'pricePerServing': number;
  'analyzedInstructions': Array<string>;
  'cheap': boolean;
  'creditsText': string;
  'cuisines': Array<string>;
  'dairyFree': boolean;
  'diets': Array<string>;
  'gaps': string;
  'glutenFree': boolean;
  'instructions': string;
  'ketogenic': boolean;
  'lowFodmap': boolean;
  'occasions': Array<string>;
  'sustainable': boolean;
  'vegan': boolean;
  'vegetarian': boolean;
  'veryHealthy': boolean;
  'veryPopular': boolean;
  'whole30': boolean;
  'weightWatcherSmartPoints': number;
  'dishTypes': Array<string>;
  'extendedIngredients': Set<GetRecipeInformation200ResponseExtendedIngredientsInner>;
  'summary': string;
  'winePairing': GetRecipeInformation200ResponseWinePairing;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'number',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
    {
      name: 'image',
      baseName: 'image',
      type: 'string',
      format: '',
    },
    {
      name: 'imageType',
      baseName: 'imageType',
      type: 'string',
      format: '',
    },
    {
      name: 'servings',
      baseName: 'servings',
      type: 'number',
      format: '',
    },
    {
      name: 'readyInMinutes',
      baseName: 'readyInMinutes',
      type: 'number',
      format: '',
    },
    {
      name: 'license',
      baseName: 'license',
      type: 'string',
      format: '',
    },
    {
      name: 'sourceName',
      baseName: 'sourceName',
      type: 'string',
      format: '',
    },
    {
      name: 'sourceUrl',
      baseName: 'sourceUrl',
      type: 'string',
      format: '',
    },
    {
      name: 'spoonacularSourceUrl',
      baseName: 'spoonacularSourceUrl',
      type: 'string',
      format: '',
    },
    {
      name: 'aggregateLikes',
      baseName: 'aggregateLikes',
      type: 'number',
      format: '',
    },
    {
      name: 'healthScore',
      baseName: 'healthScore',
      type: 'number',
      format: '',
    },
    {
      name: 'spoonacularScore',
      baseName: 'spoonacularScore',
      type: 'number',
      format: '',
    },
    {
      name: 'pricePerServing',
      baseName: 'pricePerServing',
      type: 'number',
      format: '',
    },
    {
      name: 'analyzedInstructions',
      baseName: 'analyzedInstructions',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'cheap',
      baseName: 'cheap',
      type: 'boolean',
      format: '',
    },
    {
      name: 'creditsText',
      baseName: 'creditsText',
      type: 'string',
      format: '',
    },
    {
      name: 'cuisines',
      baseName: 'cuisines',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'dairyFree',
      baseName: 'dairyFree',
      type: 'boolean',
      format: '',
    },
    {
      name: 'diets',
      baseName: 'diets',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'gaps',
      baseName: 'gaps',
      type: 'string',
      format: '',
    },
    {
      name: 'glutenFree',
      baseName: 'glutenFree',
      type: 'boolean',
      format: '',
    },
    {
      name: 'instructions',
      baseName: 'instructions',
      type: 'string',
      format: '',
    },
    {
      name: 'ketogenic',
      baseName: 'ketogenic',
      type: 'boolean',
      format: '',
    },
    {
      name: 'lowFodmap',
      baseName: 'lowFodmap',
      type: 'boolean',
      format: '',
    },
    {
      name: 'occasions',
      baseName: 'occasions',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'sustainable',
      baseName: 'sustainable',
      type: 'boolean',
      format: '',
    },
    {
      name: 'vegan',
      baseName: 'vegan',
      type: 'boolean',
      format: '',
    },
    {
      name: 'vegetarian',
      baseName: 'vegetarian',
      type: 'boolean',
      format: '',
    },
    {
      name: 'veryHealthy',
      baseName: 'veryHealthy',
      type: 'boolean',
      format: '',
    },
    {
      name: 'veryPopular',
      baseName: 'veryPopular',
      type: 'boolean',
      format: '',
    },
    {
      name: 'whole30',
      baseName: 'whole30',
      type: 'boolean',
      format: '',
    },
    {
      name: 'weightWatcherSmartPoints',
      baseName: 'weightWatcherSmartPoints',
      type: 'number',
      format: '',
    },
    {
      name: 'dishTypes',
      baseName: 'dishTypes',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'extendedIngredients',
      baseName: 'extendedIngredients',
      type: 'Set<GetRecipeInformation200ResponseExtendedIngredientsInner>',
      format: '',
    },
    {
      name: 'summary',
      baseName: 'summary',
      type: 'string',
      format: '',
    },
    {
      name: 'winePairing',
      baseName: 'winePairing',
      type: 'GetRecipeInformation200ResponseWinePairing',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return GetRecipeInformationBulk200ResponseInner.attributeTypeMap;
  }

  public constructor() {}
}
