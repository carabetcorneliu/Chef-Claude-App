import useChefClaudeContext from "../lib/hooks";
export default function GetRecipeButton() {
  const { handleGetRecipe, buttonDisabled } = useChefClaudeContext();
  return (
    <button
      onClick={handleGetRecipe}
      className={`bg-[#d37528] text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm font-semibold rounded-[8px] text-[#fafaf8] p-[4px_6px] sm:p-[4px_6px] md:p-[8px_12px] lg:p-[8px_12px] xl:p-[8px_12px] leading-4 ${buttonDisabled} ? "opacity-5" : "opacity-100"`}
      disabled={buttonDisabled}
    >
      Get a Recipe
    </button>
  );
}
