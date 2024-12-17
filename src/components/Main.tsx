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
      <div className="w-[550px]">
        <form action={addIngredient} className="flex gap-6 h-[38px] w-full">
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
        <section className="flex gap-6 w-full">
          {totalNumberOfIngredients > 0 ? (
            <IngredientsList />
          ) : (
            <p className="w-full">No ingredients</p>
          )}
          <div className="w-[150px]">
            <SuggestedIngredients />
          </div>
        </section>
        {totalNumberOfIngredients > 3 ? (
          <ReadyForRecipe />
        ) : (
          <p className="h-[114px]"></p>
        )}
        {buttonDisabled ? (
          <span className="text-italic">"Chef is Loading..."</span>
        ) : fetchError ? (
          fetchError
        ) : (
          <ClaudeRecipe />
        )}
      </div>
    </main>
  );
}
