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
  const [ingredients, setIngredients] = useState<string[]>([]);
  //   "all the main spices",
  //   "garlic",
  //   "chicken",
  //   "oregano",
  //   "tomatoes",
  // ]);
  const [selectedCategory, setSelectedCategory] = useState("meat&proteins");
  // const data
  const suggestedIngredients = {
    "meat&proteins": [
      "chicken",
      "beef",
      "duck",
      "lamb",
      "turkey",
      "pork",
      "fish",
      "tofu",
      "eggs",
    ],
    vegetables: [
      "asparagus",
      "broccoli",
      "bell peppers",
      "beans",
      "cabbage",
      "cucumbers",
      "carrots",
      "potatoes",
      "sweet potatoes",
      "onions",
      "spinach",
      "mushrooms",
      "garlic",
      "zucchini",
    ],
    spices: [
      "cardamon",
      "cumin",
      "cinnamon",
      "coriander",
      "cayenne",
      "clove",
      "curry",
      "chilli",
      "salt",
      "pepper",
      "paprika",
      "basil",
      "yhyme",
      "oregano",
      "ginger",
      "garlic powder",
      "thyme",
      "parsley",
    ],
    fruits: ["tomatoes", "lemons", "apples", "bananas", "berries", "oranges"],
    dairy: [
      "milk",
      "cheese",
      "butter",
      "yogurt",
      "cream",
      "ice cream",
      "kefir",
      "whey",
      "sour cream",
      "ghee",
    ],
    grains: [
      "rice",
      "pasta",
      "lentils",
      "chickpeas",
      "quinoa",
      "bread",
      "oats",
      "arroz",
      "farro",
      "granola",
    ],
    condiments: [
      "soy sauce",
      "vinegar",
      "ketchup",
      "mayonnaise",
      "mustard",
      "honey",
      "hot sauce",
      "salsa",
      "barbecue sauce",
      "nut butter",
      "wasabi",
      "pesto",
      "guacamole",
      "dijon mustard",
      "hummus",
    ],
    nuts: [
      "almonds",
      "walnuts",
      "sunflower seeds",
      "pumpkin seeds",
      "chia seeds",
      "macadamia nuts",
      "pecans",
      "cashews",
      "hazelnuts",
      "sesame seeds",
      "pistachios",
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
    if (ingredients.map((i) => i).includes(newIngredient)) {
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
