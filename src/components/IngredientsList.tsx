import DeleteButton from "./DeleteButton";

import useChefClaudeContext from "../lib/hooks";

export default function IngredientsList() {
  const { ingredients, handleDeleteIngredient } = useChefClaudeContext();
  return (
    <>
      <section className="flex flex-col w-full">
        <h4 className="text-[#1f1f1d] text-[1rem] font-bold">
          Ingredients on hand:
        </h4>
        <ul className="flex flex-col flex-grow items-center w-full pt-[11px] text-[#1f1f1d]">
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
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
