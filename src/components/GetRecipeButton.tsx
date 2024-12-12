type GetRecipeButtonProps = {
  children: React.ReactNode;
  handleGetRecipeButton: () => void;
  className?: string;
};
export default function GetRecipeButton({
  children,
  handleGetRecipeButton,
  className,
}: GetRecipeButtonProps) {
  return (
    <button onClick={handleGetRecipeButton} className={className}>
      {children}
    </button>
  );
}
