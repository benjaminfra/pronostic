type CardProps = {
  children: React.ReactNode;
  border?: "border-dashed" | "border";
  bgColor?: "bg-yellow-gradient" | "transparent";
  onClick?: () => void;
  textColor?: "white" | "black";
};

const Card: React.FC<CardProps> = ({
  children,
  border = "border",
  bgColor = "transparent",
  onClick,
  textColor = "black",
}) => {
  const textColorVariants = {
    white: "text-white",
    black: "text-black",
  };
  const animationStyle =
    "xl:transition xl:ease-in-out xl:duration-300 xl:hover:-translate-y-1 xl:hover:scale-110";
  const cardStyle = ` ${animationStyle} ${border} ${bgColor} border-2 border-white rounded-xl lg:h-80 h-56 p-20 flex justify-center items-center`;
  const textStyle = `${textColorVariants[textColor]} text-center text-2xl font-bold max-w-full max-h-full text-ellipsis overflow-hidden`;
  return (
    <div className={cardStyle} onClick={onClick}>
      <div className={textStyle}>{children}</div>
    </div>
  );
};

export default Card;
