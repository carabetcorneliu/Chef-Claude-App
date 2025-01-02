import GetRecipeButton from "./GetRecipeButton";
import useChefClaudeContext from "../lib/hooks";

export default function ReadyForRecipe() {
  const { recipeSection } = useChefClaudeContext();
  return (
    <div
      className="flex flex-row justify-between bg-[#f0ece9] gap-4 p-[30px_30px] rounded-[10px] my-5"
      ref={recipeSection}
    >
      <div>
        <h3 className="font-semibold text-2xl pb-1 text-[#1f1f1d]">
          Ready for a recipe?
        </h3>
        <p className="text-[#8b8b8b] text-[12px]">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      <GetRecipeButton />
    </div>
  );
}
