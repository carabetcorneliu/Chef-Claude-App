import ReactMarkdown from "react-markdown";
type ClaudeRecipeProps = {
  recipe?: string;
};
export default function ClaudeRecipe(props: ClaudeRecipeProps) {
  return <section>{props.recipe}</section>;
}
