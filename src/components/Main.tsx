import { useState } from "react";
import Button from "./Button";
import DeleteButton from "./DeleteButton";
import MockRecipeData from "./MockRecipeData";
import GetRecipeButton from "./GetRecipeButton";

export default function Main() {
  const [error, setError] = useState("");
  const [ingredients, setIngredients] = useState([
    "chicken",
    "oregano",
    "tomatoes",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  const showError = (text: string) => {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 2000);
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

  return (
    <main className="flex flex-col items-center pt-[30px]">
      {/* all page container for width */}
      <div className="flex flex-col items-center max-w-[800px]]">
        <form
          action={addIngredient}
          className="flex gap-[12px] h-[38px] w-[100%]"
        >
          <input
            type="text"
            name="ingredient"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            className="flex-grow rounded-[6px] border border-[#D1D5DB] p-[9px_13px] shadow-input min-w-[150px] max-w-[600px]"
          />
          <Button className="rounded-[6px] border bg-[#141413] text-[#FAFAF8] before:content-['+'] before:m-2 w-[150px] text-[0.875rem] font-[500]">
            Add ingredient
          </Button>
        </form>
        <p className="flex justify-end h-[10px] text-red-700 text-[9px] font-light ">
          {error ? error : ""}
        </p>
        {ingredients.length > 0 ? (
          <section className="max-w-[500px]">
            <h4 className="text-[#080707] text-[1rem] font-bold">
              Ingredients on hand:
            </h4>
            <ul className="flex flex-col flex-grow items-center w-[100%] max-w-[240px] pt-[11px]">
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="flex justify-between w-[100%] text-[0.6rem] font-light h-5"
                >
                  <span>- {ingredient}</span>
                  <DeleteButton
                    handleDeleteButton={() =>
                      handleDeleteIngredient(ingredient)
                    }
                    className="text-red-700 text-[0.6rem]"
                  >
                    x
                  </DeleteButton>
                </li>
              ))}
            </ul>
            {ingredients.length > 3 && (
              <section className="flex flex-row bg-[#f0ece9] gap-3 p-[30px_25px] rounded-[10px] my-5">
                <div>
                  <h3 className="font-bold text-2xl">Ready for a recipe?</h3>
                  <p className="text-[#8b8b8b] text-sm">
                    Generate a recipe from your list of ingredients.
                  </p>
                </div>
                <GetRecipeButton
                  handleGetRecipeButton={() => setRecipeShown(true)}
                  className="bg-[#d37528] text-sm font-semibold rounded-[8px] text-white p-[8px_12px] leading-4"
                >
                  Get a recipe
                </GetRecipeButton>
              </section>
            )}
          </section>
        ) : (
          <p>No ingredients</p>
        )}
      </div>
      {recipeShown && <MockRecipeData />}
    </main>
  );
}
