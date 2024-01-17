import { createContext, useState } from "react";
import { Match } from "@/types/matchs";
import { DateTime } from "luxon";
import { NO_DATE } from "@/constants/constants";
import { addToAccumulator } from "@/utils/ObjectUtils";
import { getMatchsByRound } from "@/services/match";

type IMatchContext = {
  getMatchsByDateByRound: (
    round: number
  ) => Promise<{ [date: string]: Match[] } | undefined>;
  isMatchLoading: boolean;
};

export const MatchContext = createContext<IMatchContext>({
  getMatchsByDateByRound: () => Promise.resolve(undefined),
  isMatchLoading: false,
});

const MatchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMatchLoading, setIsMatchLoading] = useState<boolean>(false);

  const getMatchsByDateByRound: (
    round: number
  ) => Promise<{ [date: string]: Match[] } | undefined> = async (
    round: number
  ) => {
    setIsMatchLoading(true);

    try {
      const matchs = await getMatchsByRound(round);
      if (matchs) {
        const matchsByDate = matchs.reduce((acc, match) => {
          if (!match.date) {
            addToAccumulator(acc, NO_DATE, match);
          } else {
            const dateStr = DateTime.fromISO(match.date).toISODate();
            if (dateStr) {
              addToAccumulator(acc, dateStr, match);
            }
          }
          return acc;
        }, {});
        return matchsByDate;
      }
    } finally {
      setIsMatchLoading(false);
    }
  };

  return (
    <MatchContext.Provider
      value={{
        getMatchsByDateByRound,
        isMatchLoading,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export default MatchProvider;
