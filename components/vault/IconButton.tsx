import { cn } from "@/libs/utils";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label?: string;
}

const IconButton = ({
  label,
  disabled,
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        "w-9 py-1 rounded-sm flex justify-center items-center icon-button hover:bg-primary-gray-button-hover-bg transition-colors duration-100",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
