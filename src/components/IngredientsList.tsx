import DeleteButton from "./DeleteButton";
import ReadyForRecipe from "./ReadyForRecipe";

type IngredientsListProps = {
  ingredients: string[];
  handleDeleteIngredient: (ingredient: string) => void;
  getRecipe: () => void;
  buttonDisabled?: boolean;
};

export default function IngredientsList(props: IngredientsListProps) {
  return (
    <>
      <section className="flex-grow w-full">
        <h4 className="text-[#080707] text-[1rem] font-bold">
          Ingredients on hand:
        </h4>
        <ul className="flex flex-col flex-grow items-center w-full pt-[11px]">
          {props.ingredients.map((ingredient: string) => (
            <li
              key={ingredient}
              className="flex justify-between w-full text-[0.75rem] font-light h-5"
            >
              <span className="flex flex-grow flex-row justify-between">
                <span>- {ingredient}</span>
                <DeleteButton
                  handleDeleteButton={() =>
                    props.handleDeleteIngredient(ingredient)
                  }
                  className="text-red-700 text-[0.6rem] underline font-light"
                >
                  remove
                </DeleteButton>
              </span>
              <span className="w-[175px]"></span>
            </li>
          ))}
        </ul>
        {props.ingredients.length > 3 && (
          <ReadyForRecipe
            getRecipe={props.getRecipe}
            buttonDisabled={props.buttonDisabled}
          />
        )}
      </section>
    </>
  );
}
