import ReactMarkdown from "react-markdown";
import useChefClaudeContext from "../lib/hooks";

export default function ClaudeRecipe() {
  const { claudeRecipeData } = useChefClaudeContext();
  return <ReactMarkdown>{claudeRecipeData}</ReactMarkdown>;
}
