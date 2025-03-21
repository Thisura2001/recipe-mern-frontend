import React, { useEffect, useState } from 'react'
import { Loader2Icon } from 'lucide-react'
import {Recipe} from "../Model/RecipeModel.ts";
import {getFavorites, saveFavorites} from "../Utils/localStoreage.ts";
import {getRandomMeals, searchMeals} from "../Utils/api.ts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SearchBar} from "../Component/SeachBar.tsx";
import {RecipeCard} from "../Component/RecipeCard.tsx";

export const HomePage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [favorites, setFavorites] = useState<Recipe[]>(getFavorites())
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        loadInitialRecipes()
    }, [])
    const loadInitialRecipes = async () => {
        try {
            setIsLoading(true)
            setError(null)
            const randomRecipes = await getRandomMeals()
            setRecipes(randomRecipes)
        } catch (err) {
            setError('Failed to load recipes. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }
    const handleSearch = async (query: string) => {
        try {
            setIsLoading(true)
            setError(null)
            if (!query.trim()) {
                await loadInitialRecipes()
                return
            }
            const searchResults = await searchMeals(query)
            setRecipes(searchResults)
            if (searchResults.length === 0) {
                setError('No recipes found. Try a different search.')
            }
        } catch (err) {
            setError('Failed to search recipes. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }
    const toggleFavorite = (recipe: Recipe) => {
        const isFavorite = favorites.some((fav) => fav.id === recipe.id)
        let newFavorites
        if (isFavorite) {
            newFavorites = favorites.filter((fav) => fav.id !== recipe.id)
            toast.success('Recipe removed from favorites')
        } else {
            newFavorites = [...favorites, recipe]
            toast.success('Recipe added to favorites')
        }
        setFavorites(newFavorites)
        saveFavorites(newFavorites)
    }
    const isFavorite = (recipe: Recipe) => {
        return favorites.some((fav) => fav.id === recipe.id)
    }
    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <ToastContainer position="top-center" />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Find Your Perfect Recipe
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Search from our collection of delicious recipes from around the
                        world
                    </p>
                </div>
                <SearchBar onSearch={handleSearch} />
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2Icon className="animate-spin h-8 w-8 text-orange-500" />
                    </div>
                ) : error ? (
                    <div className="text-center py-10">
                        <h2 className="text-xl text-gray-600">{error}</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                isFavorite={isFavorite(recipe)}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
