import {Recipe} from "../Model/RecipeModel.ts";

interface RecipeCardProps {
    recipe: Recipe;
    isFavorite: boolean;
    toggleFavorite: (recipe: Recipe) => void;
    onSaveMeal: () => void;
    onDeleteMeal: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
                                                          recipe,
                                                          isFavorite,
                                                          toggleFavorite,
                                                          onSaveMeal,
                                                          onDeleteMeal,
                                                      }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-4">{recipe.area}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => toggleFavorite(recipe)}
                        className={`text-${isFavorite ? 'red' : 'gray'}-500 hover:text-${isFavorite ? 'red' : 'gray'}-700`}
                    >
                        {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
                    </button>
                    <button onClick={onSaveMeal} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Save Meal
                    </button>
                    <button onClick={onDeleteMeal} className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete Meal
                    </button>
                </div>
            </div>
        </div>
    );
};