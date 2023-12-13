import Button from "../button/Button";

type RoundSelectorProps = {
  value: number;
  onUp: () => void;
  onDown: () => void;
};

const RoundSelector: React.FC<RoundSelectorProps> = ({
  value,
  onUp,
  onDown,
}) => {
  return (
    <div>
      <Button onClick={onDown}>-</Button>
      {value}
      <Button onClick={onUp}>+</Button>
    </div>
  );
};

export default RoundSelector;
