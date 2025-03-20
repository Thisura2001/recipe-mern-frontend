import axios from 'axios';
import {Recipe} from "../Model/RecipeModel.ts";
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
export const searchMeals = async (query: string): Promise<Recipe[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search.php?s=${query}`);
        if (!response.data.meals) return [];
        return response.data.meals.map((meal: any) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            area: meal.strArea,
            instructions: meal.strInstructions,
            image: meal.strMealThumb,
            source: meal.strSource || 'MealDB',
        }));
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
};
export const getRandomMeals = async (): Promise<Recipe[]> => {
    try {
        const meals = [];
        for (let i = 0; i < 6; i++) {
            const response = await axios.get(`${API_BASE_URL}/random.php`);
            const meal = response.data.meals[0];
            meals.push({
                id: meal.idMeal,
                name: meal.strMeal,
                area: meal.strArea,
                instructions: meal.strInstructions,
                image: meal.strMealThumb,
                source: meal.strSource || 'MealDB',
            });
        }
        return meals;
    } catch (error) {
        console.error('Error fetching random meals:', error);
        throw error;
    }
};