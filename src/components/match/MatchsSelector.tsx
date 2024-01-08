import { MatchContext } from "@/provider/MatchProvider";
import { useContext, useEffect, useState } from "react";
import RoundSelector from "./RoundSelector";
import { Match } from "@/types/matchs";
import RoundMatchs from "./RoundMatchs";
import MatchDate from "./MatchDate";
import Loader from "../loader/Loader";
import AbsoluteCenter from "../layout/AbsoluteCenter";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const onLoadingDiv = (
    <AbsoluteCenter>
      <Loader />
    </AbsoluteCenter>
  );

  const roundMatchs = roundMatchsByDate
    ? Object.keys(roundMatchsByDate).map((date, key) => (
        <div key={key} className="my-10">
          <MatchDate date={date} />
          <RoundMatchs
            matchs={roundMatchsByDate ? roundMatchsByDate[date] : undefined}
          />
        </div>
      ))
    : "NoData";

  const matchsDiv = (
    <>
      <RoundSelector
        onChange={onChange}
        onDown={onDown}
        onUp={onUp}
        value={round}
      />
      {isMatchLoading ? onLoadingDiv : roundMatchs}
    </>
  );

  return (
    <div className="max-w-5xl xl:mx-auto my-32 mx-10 md:mx-20">{matchsDiv}</div>
  );
};

export default MatchsSelector;
