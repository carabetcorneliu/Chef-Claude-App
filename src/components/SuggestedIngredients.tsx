import useChefClaudeContext from "../lib/hooks";
import Button from "./Button";

export default function SuggestedIngredients() {
  const {
    suggestedIngredients,
    selectedCategory,
    handleFastAddIngredient,
    handleCategoryChange,
  } = useChefClaudeContext();
  const suggestedArray = Array.from(Object.entries(suggestedIngredients));
  return (
    <span className="flex gap-2 flex-col">
      <section className="flex justify-end text-[0.8rem] text-[#080707]">
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          name="suggested"
          id="suggested"
          className="p-[4px_6px] rounded-[6px] border-[2px]"
        >
          {suggestedArray.map((ingredient) => (
            <option key={ingredient[0]}>{ingredient[0]}</option>
          ))}
        </select>
      </section>
      <ul className="flex flex-col self-end h-[200px]">
        {suggestedIngredients[selectedCategory].map((ingredient: string) => (
          <li
            className="flex flex-row justify-between w-[150px] text-[0.75rem] font-light h-5"
            key={ingredient}
          >
            {ingredient}
            <Button
              onClick={() => handleFastAddIngredient(ingredient)}
              className="text-red-700 text-[0.6rem] underline font-light"
            >
              +add
            </Button>
          </li>
        ))}
      </ul>
    </span>
  );
}
