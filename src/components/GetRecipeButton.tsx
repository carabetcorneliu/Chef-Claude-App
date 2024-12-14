type GetRecipeButtonProps = {
  children: React.ReactNode;
  handleGetRecipeButton: () => void;
  className?: string;
  buttonDisabled?: boolean;
};
export default function GetRecipeButton(props: GetRecipeButtonProps) {
  return (
    <button
      onClick={props.handleGetRecipeButton}
      className={`${props.className} ${props.buttonDisabled} ? "opacity-5" : "opacity-100"`}
      disabled={props.buttonDisabled}
    >
      {props.children}
    </button>
  );
}
