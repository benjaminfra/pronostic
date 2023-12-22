import { MatchContext } from "@/provider/MatchProvider";
import { useContext, useEffect, useState } from "react";
import RoundSelector from "./RoundSelector";
import { Match } from "@/types/matchs";
import RoundMatchs from "./RoundMatchs";
import MatchDate from "./MatchDate";

const MatchsSelector = () => {
  const { getMatchsByRound, isMatchLoading } = useContext(MatchContext);

  const [roundMatchsByDate, setRoundMatchsByDate] = useState<
    { [date: string]: Match[] } | undefined
  >(undefined);

  const [round, setRound] = useState<number>(1);

  useEffect(() => {
    if (round) {
      getMatchsByRound(round).then((data) => {
        setRoundMatchsByDate(data);
      });
    }
  }, [round]);

  const onUp = async () => {
    if (round < 34) {
      setRound(round + 1);
    }
  };

  const onDown = async () => {
    if (round > 1) {
      setRound(round - 1);
    }
  };

  const onChange = async (value: number) => {
    setRound(value);
  };

  const roundMatchs = roundMatchsByDate
    ? Object.keys(roundMatchsByDate).map((date, key) => (
        <div key={key} className="my-10">
          <MatchDate date={date} isLoading={isMatchLoading} />
          <RoundMatchs
            matchs={roundMatchsByDate ? roundMatchsByDate[date] : undefined}
            isLoading={isMatchLoading}
          />
        </div>
      ))
    : "NoData";

  return (
    <div className="max-w-5xl m-auto">
      <RoundSelector
        onChange={onChange}
        onDown={onDown}
        onUp={onUp}
        value={round}
      />
      {roundMatchs}
    </div>
  );
};

export default MatchsSelector;
