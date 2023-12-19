import LeftArrowButton from "../button/LeftArrowButton";
import RightArrowButton from "../button/RightArrowButton";

type RoundSelectorProps = {
  value: number;
  onUp: () => void;
  onDown: () => void;
  onChange: (value: number) => void;
};

const RoundSelector: React.FC<RoundSelectorProps> = ({
  value,
  onUp,
  onDown,
  onChange,
}) => {


  return (
    <div className="flex mt-2 text-center">
      <div className="flex-1">
        <LeftArrowButton onClick={onDown} />
      </div>
      <div className="flex-1">
        <input
          type="number"
          onChange={(e) => onChange(Number.parseInt(e.target.value))}
          max={34}
          min={1}
          value={value}
        />
      </div>
      <div className="flex-1">
        <RightArrowButton onClick={onUp} />
      </div>
    </div>
  );
};

export default RoundSelector;
