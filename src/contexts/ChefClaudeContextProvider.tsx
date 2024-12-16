import { createContext, useState } from "react";
import { getRecipeFromMistral } from "../ai/ai";

type ChefClaudeContextProviderProps = {
  children: React.ReactNode;
};

type TChefClaudeContext = {
  ingredients: string[];
  totalNumberOfIngredients: number;
  claudeRecipeData: string | null;
  isRecipe: boolean;
  error: string;
  buttonDisabled: boolean;
  showError: (text: string) => void;
  disableButton: () => void;
  addIngredient: (formData: FormData) => void;
  handleDeleteIngredient: (ingredient: string) => void;
  handleGetRecipe: () => void;
};

export const ChefClaudeContext = createContext<TChefClaudeContext | null>(null);

const ChefClaudeContextProvider = ({
  children,
}: ChefClaudeContextProviderProps) => {
  // state
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [claudeRecipeData, setClaudeRecipeData] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "garlic",
    "chicken",
    "oregano",
    "tomatoes",
  ]);
  // derived state
  const totalNumberOfIngredients = ingredients.length;
  const isRecipe = claudeRecipeData ? false : true;

  const showError = (text: string) => {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  const disableButton = () => {
    setButtonDisabled(true);
  };
  // refactor to React 19 forms
  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient")?.toString().toLowerCase();
    if (!newIngredient) {
      showError("empty ingredient");
      return;
    }
    if (ingredients.map((i) => i.toLowerCase()).includes(newIngredient)) {
      showError("ingredient already in list");
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  const handleDeleteIngredient = (ingredient: string) => {
    setIngredients((prev) => prev.filter((i) => i !== ingredient));
  };
  const handleGetRecipe = async () => {
    disableButton();
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setClaudeRecipeData(recipeMarkdown);
    } catch (err) {
      showError(`Failed to get recipe: ${err}`);
      setClaudeRecipeData("");
    } finally {
      setButtonDisabled(false);
    }
  };
  return (
    <ChefClaudeContext.Provider
      value={{
        ingredients,
        totalNumberOfIngredients,
        claudeRecipeData,
        isRecipe,
        error,
        buttonDisabled,
        showError,
        disableButton,
        addIngredient,
        handleDeleteIngredient,
        handleGetRecipe,
      }}
    >
      {children}
    </ChefClaudeContext.Provider>
  );
};

export default ChefClaudeContextProvider;
