export type RoundButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  colorScheme?: "yellow" | "transparent";
  dataTest?: string;
};

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  colorScheme = "transparent",
  dataTest,
  ...props
}) => {
  const colorVariants = {
    yellow: "bg-yellow-400 hover:bg-yellow-300",
    transparent: "border border-gray-400",
  };

  const buttonClasses = `${props.className ? props.className : ""}
        ${colorVariants[colorScheme]}
        text-black
        p-3
        text-center
        text-md
        font-semibold
        disabled:pointer-events-none disabled:opacity-30
        rounded-full
        shadow-xl
      `;

  return (
    <button {...props} className={buttonClasses} data-test={dataTest}>
      {children}
    </button>
  );
};

export default RoundButton;
