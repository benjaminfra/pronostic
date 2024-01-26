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
    "transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110";
  const cardStyle = ` ${animationStyle} ${border} ${bgColor} border-2 border-white rounded-xl h-80 p-20 flex justify-center items-center`;
  const textStyle = `${textColorVariants[textColor]} text-center text-2xl font-bold max-w-full max-h-full text-ellipsis overflow-hidden`;
  const card = (
    <div className={cardStyle}>
      <div className={textStyle}>{children}</div>
    </div>
  );
  return onClick ? <button onClick={onClick}>{card}</button> : card;
};

export default Card;
