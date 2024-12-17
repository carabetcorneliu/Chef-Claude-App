type DeleteButtonProps = {
  handleDeleteButton: () => void;
  className?: string;
};

export default function DeleteButton({
  handleDeleteButton,
  className,
}: DeleteButtonProps) {
  return (
    <button onClick={handleDeleteButton} className={className}>
      -remove
    </button>
  );
}
