import { useState } from "react";
import Button from "./Button";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai/ai";

export default function Main() {
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [claudeRecipeData, setClaudeRecipeData] = useState("");
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "garlic",
    "chicken",
    "oregano",
    "tomatoes",
  ]);

  const showError = (text: string) => {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  const disableButton = () => {
    setButtonDisabled(true);
  };
  // React 18 forms
  // need to add ~onSubmit={handleSubmitForm}~ to form
  // const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient")?.toString();
  //   if (!newIngredient) return;
  //   if (
  //     ingredients
  //       .map((i) => i.toLowerCase())
  //       .includes(newIngredient.toLocaleLowerCase())
  //   ) {
  //     showError();
  //     return;
  //   }
  //   setIngredients([...ingredients, newIngredient]);
  //   event.currentTarget.reset();
  // };

  // refactor to React 19 forms
  const addIngredient = (formData: FormData) => {
    const newIngredient = formData
      .get("ingredient")
      ?.toString()
      .toLocaleLowerCase();
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
  const getRecipe = async () => {
    disableButton();
    setClaudeRecipeData("Chef is loading...");
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setClaudeRecipeData(() => JSON.stringify(recipeMarkdown) as string);
    setButtonDisabled(false);
  };

  return (
    <main className="flex flex-col items-center pt-[30px]">
      {/* all page container for width */}
      <div className="w-[550px]">
        <form action={addIngredient} className="flex gap-4 h-[38px] w-full">
          <input
            type="text"
            name="ingredient"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            className="flex flex-shrink flex-grow rounded-[6px] border border-[#D1D5DB] p-[9px_13px] shadow-input"
          />
          <Button className="rounded-[6px] border bg-[#141413] text-[#FAFAF8] before:content-['+'] before:m-2 w-[150px] text-[0.875rem] font-[500]">
            Add ingredient
          </Button>
        </form>
        <p className="flex justify-end h-[10px] text-red-700 text-[9px] font-light w-full pr-[175px]">
          {error ? error : ""}
        </p>
        {ingredients.length > 0 ? (
          <IngredientsList
            ingredients={ingredients}
            handleDeleteIngredient={handleDeleteIngredient}
            getRecipe={getRecipe}
            buttonDisabled={buttonDisabled}
          />
        ) : (
          <p>No ingredients</p>
        )}
        {claudeRecipeData && <ClaudeRecipe recipe={claudeRecipeData} />}
      </div>
    </main>
  );
}
