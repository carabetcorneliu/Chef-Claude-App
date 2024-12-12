type DeleteButtonProps = {
  handleDeleteButton: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function DeleteButton({
  handleDeleteButton,
  className,
  children,
}: DeleteButtonProps) {
  return (
    <button onClick={handleDeleteButton} className={className}>
      {children}
    </button>
  );
}
