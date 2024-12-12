type ButtonProps = {
  onClick?: () => void;
  onHover?: () => void;
  onSubmit?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  onClick,
  onHover,
  onSubmit,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      onMouseOver={onHover}
      onClick={onClick}
      onSubmit={onSubmit}
      className={className}
    >
      {children}
    </button>
  );
}
