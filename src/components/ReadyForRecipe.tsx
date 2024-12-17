import GetRecipeButton from "./GetRecipeButton";

export default function ReadyForRecipe() {
  return (
    <section className="flex flex-row justify-between bg-[#f0ece9] gap-4 p-[30px_30px] rounded-[10px] my-5">
      <div>
        <h3 className="font-bold text-2xl pb-1">Ready for a recipe?</h3>
        <p className="text-[#8b8b8b] text-[12px]">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      <GetRecipeButton />
    </section>
  );
}
