import React, { useEffect, useState } from 'react'
import {Recipe} from "../Model/RecipeModel.ts";
import {getFavorites, saveFavorites} from "../Utils/localStoreage.ts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {RecipeCard} from "../Component/RecipeCard.tsx";
export const Favorite: React.FC = () => {
    const [favorites, setFavorites] = useState<Recipe[]>([])
    useEffect(() => {
        setFavorites(getFavorites())
    }, [])
    const toggleFavorite = (recipe: Recipe) => {
        const newFavorites = favorites.filter((fav) => fav.id !== recipe.id)
        setFavorites(newFavorites)
        saveFavorites(newFavorites)
        toast.success('Recipe removed from favorites')
    }
    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <ToastContainer position="top-center" />
            <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Your Favorite Recipes
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        All your saved recipes in one place
                    </p>
                </div>
                {favorites.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-xl text-gray-600 mb-2">
                            No favorite recipes yet
                        </h2>
                        <p className="text-gray-500">
                            Start adding recipes to your favorites from the home page
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((recipe) => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                isFavorite={true}
                                toggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
