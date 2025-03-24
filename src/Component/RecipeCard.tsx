import React, { useState } from 'react'
import { HeartIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import {Recipe} from "../Model/RecipeModel.ts";
import {formatInstructions} from "../Utils/formatInstructions.ts";
interface RecipeCardProps {
    recipe: Recipe
    isFavorite: boolean
    toggleFavorite: (recipe: Recipe) => void
}
export const RecipeCard: React.FC<RecipeCardProps> = ({
                                                          recipe,
                                                          isFavorite,
                                                          toggleFavorite,
                                                      }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const formattedInstructions = formatInstructions(recipe.instructions)
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={() => toggleFavorite(recipe)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <HeartIcon
                        size={20}
                        className={
                            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                        }
                    />
                </button>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold mb-1 text-orange-600">
                        {recipe.name}
                    </h3>
                    <span className="bg-blue-100 text-gray-600 text-xs px-2 py-1 rounded">
            {recipe.area}
          </span>
                </div>
                <div className="mt-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-orange-600 font-medium"
                    >
                        Recipe Instructions
                        {isExpanded ? (
                            <ChevronUpIcon size={20} />
                        ) : (
                            <ChevronDownIcon size={20} />
                        )}
                    </button>
                    {isExpanded && (
                        <div className="mt-2 space-y-2">
                            {formattedInstructions.map((step, index) => (
                                <p key={index} className="text-gray-600 text-sm">
                                    {step}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                {recipe.source && recipe.source !== "MealDB" && (
                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                        <a
                            href={recipe.source}
                            target="_blank" // to open link in new page
                            className="block mt-2 bg-orange-500 text-white text-center py-1 px-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200"
                        >
                            About this recipe
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};