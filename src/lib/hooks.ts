import { useContext } from "react";
import { ChefClaudeContext } from "../contexts/ChefClaudeContext";

export default function useChefClaudeContext() {
  const context = useContext(ChefClaudeContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  return context;
}
