import GetRecipeButton from "./GetRecipeButton";
import useChefClaudeContext from "../lib/hooks";

export default function ReadyForRecipe() {
  const { recipeSection } = useChefClaudeContext();
  const divRef = recipeSection as React.RefObject<HTMLDivElement>;
  return (
    <div
      className="w-full flex flex-row justify-between bg-[#f0ece9] gap-4 p-5 sm:p-5 md:p-5 lg:p-7 xl:p-8 rounded-[10px] my-5 "
      ref={divRef}
    >
      <div>
        <h3 className="font-semibold sm:text-lg md:text-lg lg:text-2xl xl:text-2xl pb-1 text-[#1f1f1d]">
          Ready for a recipe?
        </h3>
        <p className="text-[#8b8b8b] text-[10px] sm:text-xs md:text-xs lg:text-xs xl:text-xs">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      <GetRecipeButton />
    </div>
  );
}
