import { useState, useRef, useEffect } from "react";
import { getRecipeFromMistral } from "../ai/ai";

export const useChefClaudeState = () => {
  // state
  const [error, setError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [claudeRecipeData, setClaudeRecipeData] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("meat&proteins");
  // refs
  const recipeSection = useRef<HTMLDivElement>(null);
  // derived state
  const totalNumberOfIngredients = ingredients.length;
  const isRecipe = claudeRecipeData ? false : true;

  const checkIfInList = (newIngredient: string) => {
    if (ingredients.map((i) => i).includes(newIngredient)) {
      showError("ingredient already in list");
      return true;
    }
    return false;
  };

  const showError = (text: string) => {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 2000);
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
    setButtonDisabled(true);
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (claudeRecipeData !== null && recipeSection.current !== null) {
      // commenting this out for minor incompatibility issues
      // recipeSection.current.scrollIntoView({ behavior: "smooth" });
      const yCoord = recipeSection.current.getBoundingClientRect().top;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [claudeRecipeData]);

  return {
    error,
    fetchError,
    buttonDisabled,
    claudeRecipeData,
    ingredients,
    selectedCategory,
    recipeSection,
    totalNumberOfIngredients,
    isRecipe,
    addIngredient,
    handleFastAddIngredient,
    handleDeleteIngredient,
    handleGetRecipe,
    handleCategoryChange,
  };
};
