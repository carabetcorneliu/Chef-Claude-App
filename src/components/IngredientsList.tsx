import DeleteButton from "./DeleteButton";
import ReadyForRecipe from "./ReadyForRecipe";
import useChefClaudeContext from "../lib/hooks";

export default function IngredientsList() {
  const { ingredients, totalNumberOfIngredients, handleDeleteIngredient } =
    useChefClaudeContext();
  return (
    <>
      <section className="flex-grow w-full">
        <h4 className="text-[#080707] text-[1rem] font-bold">
          Ingredients on hand:
        </h4>
        <ul className="flex flex-col flex-grow items-center w-full pt-[11px]">
          {ingredients.map((ingredient: string) => (
            <li
              key={ingredient}
              className="flex justify-between w-full text-[0.75rem] font-light h-5"
            >
              <span className="flex flex-grow flex-row justify-between">
                <span>- {ingredient}</span>
                <DeleteButton
                  handleDeleteButton={() => handleDeleteIngredient(ingredient)}
                  className="text-red-700 text-[0.6rem] underline font-light"
                />
              </span>
              <span className="w-[175px]"></span>
            </li>
          ))}
        </ul>
        {totalNumberOfIngredients > 3 && <ReadyForRecipe />}
      </section>
    </>
  );
}
