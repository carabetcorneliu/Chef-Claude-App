import { ChefClaudeContext } from "./ChefClaudeContext";
import { useChefClaudeState } from "../lib/useChefClaudeState";
import { suggestedIngredients } from "../constants/suggestedIngredients";

type ChefClaudeContextProviderProps = {
  children: React.ReactNode;
};

const ChefClaudeContextProvider = ({
  children,
}: ChefClaudeContextProviderProps) => {
  const state = useChefClaudeState();

  return (
    <ChefClaudeContext.Provider
      value={{
        ...state,
        suggestedIngredients,
      }}
    >
      {children}
    </ChefClaudeContext.Provider>
  );
};

export default ChefClaudeContextProvider;
