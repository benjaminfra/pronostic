type CardProps = {
  padding?: number;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ padding = 20, children }) => {
  const animationStyle =
    "transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110";
  const cardStyle = `bg-yellow-gradient border rounded-xl p-${padding} ${animationStyle}`;
  return (
    <div className={cardStyle}>
      <div className="text-center text-black">{children}</div>
    </div>
  );
};

export default Card;
