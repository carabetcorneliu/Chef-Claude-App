import GetRecipeButton from "./GetRecipeButton";

type ReadyForRecipeProps = {
  getRecipe: () => void;
  buttonDisabled?: boolean;
};

export default function ReadyForRecipe(props: ReadyForRecipeProps) {
  return (
    <section className="flex flex-row justify-between bg-[#f0ece9] gap-4 p-[30px_25px] rounded-[10px] my-5">
      <div>
        <h3 className="font-bold text-2xl pb-1">Ready for a recipe?</h3>
        <p className="text-[#8b8b8b] text-[12px]">
          Generate a recipe from your list of ingredients.
        </p>
      </div>
      <GetRecipeButton
        handleGetRecipeButton={props.getRecipe}
        buttonDisabled={props.buttonDisabled}
        className="bg-[#d37528] text-sm font-semibold rounded-[8px] text-white p-[8px_12px] leading-4"
      >
        Get a recipe
      </GetRecipeButton>
    </section>
  );
}
