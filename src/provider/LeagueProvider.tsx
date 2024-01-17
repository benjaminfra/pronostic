import { League, NewLeague } from "@/types/leagues";
import { createContext, useState } from "react";
import { createLeague } from "@/services/leagues";

type ILeagueContext = {
  isLeaguesLoading: boolean;
  myLeagues: League[];
  createMyLeague: (league: NewLeague) => Promise<void>;
};

export const LeagueContext = createContext<ILeagueContext>({
  myLeagues: [],
  isLeaguesLoading: false,
  createMyLeague: () => Promise.resolve(),
});

const LeagueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLeaguesLoading, setIsLeaguesLoading] = useState(false);
  const [myLeagues, setMyLeagues] = useState<League[]>([]);

  const createMyLeague = async (league: NewLeague) => {
    setIsLeaguesLoading(true);
    try {
      const newLeague = await createLeague(league);
      if (newLeague) {
        setMyLeagues([...myLeagues, newLeague]);
      }
    } finally {
      setIsLeaguesLoading(false);
    }
  };

  return (
    <LeagueContext.Provider
      value={{
        isLeaguesLoading,
        myLeagues,
        createMyLeague,
      }}
    >
      {children}
    </LeagueContext.Provider>
  );
};

export default LeagueProvider;
