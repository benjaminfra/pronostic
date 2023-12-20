import { MatchContext } from "@/provider/MatchProvider";
import { useContext, useEffect, useState } from "react";
import RoundSelector from "./RoundSelector";
import { Match } from "@/types/matchs";
import RoundMatchs from "./RoundMatchs";

const MatchsSelector = () => {
  const { getMatchsByRound, isMatchLoading } = useContext(MatchContext);

  const [matchs, setMatchs] = useState<Match[] | undefined>(undefined);
  const [round, setRound] = useState<number>(1);

  useEffect(() => {
    if (round) {
      getMatchsByRound(round).then((data) => {
        setMatchs(data);
      });
    }
  }, [round]);

  const onUp = async () => {
    setRound(round + 1);
  };

  const onDown = async () => {
    setRound(round - 1);
  };

  const onChange = async (value: number) => {
    setRound(value);
  };

  return (
    <div className="max-w-5xl m-auto">
      <RoundSelector
        onChange={onChange}
        onDown={onDown}
        onUp={onUp}
        value={round}
      />
      <RoundMatchs isLoading={isMatchLoading} matchs={matchs} />
    </div>
  );
};

export default MatchsSelector;
