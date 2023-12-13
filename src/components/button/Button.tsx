import Loader from "../loader/Loader";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  colorScheme?: "yellow" | "cyan";
  size?: "sm" | "md" | "lg" | "full";
  isLoading?: boolean;
  dataTest?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme = "yellow",
  size = "md",
  isLoading = false,
  dataTest,
  ...props
}) => {
  const colorVariants = {
    yellow: "bg-yellow-400 hover:bg-yellow-300",
    cyan: "bg-cyan-400 hover:bg-cyan-500",
  };

  const sizeVariants = {
    sm: "",
    md: "",
    lg: "w-60 h-14",
    full: "w-full",
  };

  const buttonClasses = `${props.className ? props.className : ""}
      ${colorVariants[colorScheme]}
      ${sizeVariants[size]}
      text-black
      pe-4 ps-4
      rounded-md
      shadow-sm
      text-center
      h-10
      text-md
      min-w-10
      font-semibold
      disabled:pointer-events-none disabled:opacity-30
    `;

  return (
    <button {...props} className={buttonClasses} data-test={dataTest}>
      {isLoading && <Loader dataTest={`${dataTest}-loader`} />}
      {children}
    </button>
  );
};

export default Button;
