import { createContext } from "react";

type TChefClaudeContext = {
  ingredients: string[];
  totalNumberOfIngredients: number;
  selectedCategory: string;
  recipeSection: object;
  suggestedIngredients: Record<string, string[]>;
  claudeRecipeData: string | null;
  isRecipe: boolean;
  error: string;
  fetchError: string;
  buttonDisabled: boolean;
  handleCategoryChange: (category: string) => void;
  showError: (text: string) => void;
  addIngredient: (formData: FormData) => void;
  handleFastAddIngredient: (ingredient: string) => void;
  handleDeleteIngredient: (ingredient: string) => void;
  handleGetRecipe: () => void;
};

export const ChefClaudeContext = createContext<TChefClaudeContext | null>(null);
