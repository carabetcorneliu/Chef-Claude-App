import Button from "./Button";
import IngredientsList from "./IngredientsList";
import SuggestedIngredients from "./SuggestedIngredients";
import ReadyForRecipe from "./ReadyForRecipe";
import ClaudeRecipe from "./ClaudeRecipe";
import useChefClaudeContext from "../lib/hooks";

export default function Main() {
  const {
    addIngredient,
    error,
    fetchError,
    totalNumberOfIngredients,
    buttonDisabled,
  } = useChefClaudeContext();
  return (
    <main className="flex flex-col items-center pt-[30px]">
      {/* all page container for width */}
      <div className="max-w-[500px]">
        <form action={addIngredient} className="flex gap-6 h-[38px] w-full">
          <input
            type="text"
            name="ingredient"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            className="flex flex-shrink flex-grow rounded-[6px] border border-[#D1D5DB] text-[#1f1f1d] p-[9px_13px] shadow-input"
          />
          <Button className="rounded-[6px] border bg-[#1f1f1d] text-[#FAFAF8] w-36 before:content-['+'] before:m-2 text-[0.875rem] font-[500]">
            Add ingredient
          </Button>
        </form>
        <p className="flex justify-end h-[10px] text-red-700 text-[9px] font-light w-full pr-44">
          {error ? error : ""}
        </p>
        <section className="flex gap-6 w-full">
          {totalNumberOfIngredients > 0 ? (
            <IngredientsList />
          ) : (
            <p className="w-full text-[#1f1f1d]">No ingredients</p>
          )}
          <div className="w-36">
            <SuggestedIngredients />
          </div>
        </section>
        {totalNumberOfIngredients > 3 ? (
          <ReadyForRecipe />
        ) : (
          <p className="h-[114px]"></p>
        )}
        {buttonDisabled ? (
          <p className="text-italic text-[#1f1f1d] pb-4">Chef is loading...</p>
        ) : fetchError ? (
          fetchError
        ) : (
          <ClaudeRecipe />
        )}
      </div>
    </main>
  );
}
