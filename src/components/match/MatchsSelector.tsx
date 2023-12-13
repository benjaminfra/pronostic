import { MatchContext } from "@/provider/MatchProvider";
import { useContext, useState } from "react";
import RoundSelector from "./RoundSelector";
import { Match } from "@/types/matchs";
import RoundMatchs from "./RoundMatchs";

const MatchsSelector = () => {
  const { getMatchsByRound, isMatchLoading } = useContext(MatchContext);

  const [matchs, setMatchs] = useState<Match[] | undefined>(undefined);
  const [round, setRound] = useState<number>(1);

  const onUp = async () => {
    setRound(round + 1);
    const matchs = await getMatchsByRound(round);
    setMatchs(matchs);
  };

  const onDown = async () => {
    setRound(round - 1);
    const matchs = await getMatchsByRound(round);
    setMatchs(matchs);
  };

  return (
    <div>
      <RoundSelector onDown={onDown} onUp={onUp} value={round} />
      <RoundMatchs isLoading={isMatchLoading} matchs={matchs} />
    </div>
  );
};

export default MatchsSelector;
