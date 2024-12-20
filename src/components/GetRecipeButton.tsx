import useChefClaudeContext from "../lib/hooks";
export default function GetRecipeButton() {
  const { handleGetRecipe, buttonDisabled } = useChefClaudeContext();
  return (
    <button
      onClick={handleGetRecipe}
      className={`bg-[#d37528] text-sm font-semibold rounded-[8px] text-[#fafaf8] p-[8px_12px] leading-4 ${buttonDisabled} ? "opacity-5" : "opacity-100"`}
      disabled={buttonDisabled}
    >
      Get a Recipe
    </button>
  );
}
