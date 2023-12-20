import { useTranslation } from "react-i18next";
import LeftArrowButton from "../button/LeftArrowButton";
import RightArrowButton from "../button/RightArrowButton";
import { ROUND_NUMBERS } from "@/constants/constants";
import Select from "../select/Select";

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
  const { t } = useTranslation();

  return (
    <div className="flex mt-2">
      <div className="flex-1 text-right mr-5">
        <LeftArrowButton onClick={onDown} />
      </div>
      <div className="flex-1 text-center">
        <Select
          onChange={(e) => onChange(Number.parseInt(e.target.value))}
          value={value}
        >
          {ROUND_NUMBERS.map((round) => (
            <option key={round} value={round}>
              {t("Pronostic.round", { roundNumber: round })}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex-1 text-left ml-5">
        <RightArrowButton onClick={onUp} />
      </div>
    </div>
  );
};

export default RoundSelector;
