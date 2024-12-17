import { createContext, useState } from "react";
import { getRecipeFromMistral } from "../ai/ai";

type ChefClaudeContextProviderProps = {
  children: React.ReactNode;
};

type TChefClaudeContext = {
  ingredients: string[];
  totalNumberOfIngredients: number;
  selectedCategory: string;
  suggestedIngredients: Record<string, string[]>;
  claudeRecipeData: string | null;
  isRecipe: boolean;
  error: string;
  fetchError: string;
  buttonDisabled: boolean;
  handleCategoryChange: (category: string) => void;
  showError: (text: string) => void;
  disableButton: () => void;
  addIngredient: (formData: FormData) => void;
  handleFastAddIngredient: (ingredient: string) => void;
  handleDeleteIngredient: (ingredient: string) => void;
  handleGetRecipe: () => void;
};

export const ChefClaudeContext = createContext<TChefClaudeContext | null>(null);

const ChefClaudeContextProvider = ({
  children,
}: ChefClaudeContextProviderProps) => {
  // state
  const [error, setError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [claudeRecipeData, setClaudeRecipeData] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState([]);
  //   "all the main spices",
  //   "garlic",
  //   "chicken",
  //   "oregano",
  //   "tomatoes",
  // ]);
  const [selectedCategory, setSelectedCategory] = useState("meat&proteins");
  // const data
  const suggestedIngredients = {
    "meat&proteins": ["chicken", "beef", "pork", "fish", "tofu", "eggs"],
    vegetables: [
      "carrots",
      "potatoes",
      "onions",
      "bell peppers",
      "broccoli",
      "spinach",
      "mushrooms",
    ],
    spices: [
      "salt",
      "pepper",
      "paprika",
      "cumin",
      "basil",
      "yhyme",
      "oregano",
      "cinnamon",
      "ginger",
    ],
    fruits: ["tomatoes", "lemons", "apples", "bananas", "berries", "oranges"],
    dairy: ["milk", "cheese", "butter", "yogurt", "cream"],
    grains: ["rice", "pasta", "lentils", "chickpeas", "quinoa", "bread"],
    condiments: [
      "soy sauce",
      "vinegar",
      "ketchup",
      "mayonnaise",
      "mustard",
      "honey",
      "hot sauce",
    ],
    nuts: [
      "almonds",
      "walnuts",
      "sunflower seeds",
      "pumpkin seeds",
      "chia seeds",
    ],
  };

  // derived state
  const totalNumberOfIngredients = ingredients.length;
  const isRecipe = claudeRecipeData ? false : true;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
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

  const checkIfInList = (newIngredient: string) => {
    if (ingredients.map((i) => i.toLowerCase()).includes(newIngredient)) {
      showError("ingredient already in list");
      return true;
    }
    return false;
  };
  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient")?.toString().toLowerCase();
    if (!newIngredient) {
      showError("empty ingredient");
      return;
    }
    if (checkIfInList(newIngredient)) {
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  const handleFastAddIngredient = (ingredient: string) => {
    if (checkIfInList(ingredient)) return;
    setIngredients((prev) => [...prev, ingredient]);
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
      setFetchError(`fetching error: ${err}`);
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
        selectedCategory,
        suggestedIngredients,
        claudeRecipeData,
        isRecipe,
        error,
        fetchError,
        buttonDisabled,
        handleCategoryChange,
        showError,
        disableButton,
        addIngredient,
        handleFastAddIngredient,
        handleDeleteIngredient,
        handleGetRecipe,
      }}
    >
      {children}
    </ChefClaudeContext.Provider>
  );
};

export default ChefClaudeContextProvider;
