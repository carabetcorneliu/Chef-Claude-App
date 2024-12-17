import ReactMarkdown from "react-markdown";
import useChefClaudeContext from "../lib/hooks";
import "./ClaudeRecipe.css";

export default function ClaudeRecipe() {
  const { claudeRecipeData } = useChefClaudeContext();
  return (
    <div className="recipe-container">
      <hr className="recipe-dividing-line" />
      <ReactMarkdown>{claudeRecipeData}</ReactMarkdown>
    </div>
  );
}
