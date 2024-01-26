import { League, LeagueData } from "@/types/leagues";
import { createContext, useContext, useEffect, useState } from "react";
import { createLeague, getMyLeagues } from "@/services/leagues";
import { AuthContext } from "./AuthProvider";
import { verifyLoggedUser } from "@/utils/ProfileUtils";

type ILeagueContext = {
  isLeaguesLoading: boolean;
  myLeagues: League[];
  createMyLeague: (league: LeagueData) => Promise<void>;
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

  const { loggedUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (loggedUser) {
        setIsLeaguesLoading(true);
        try {
          const author = verifyLoggedUser(loggedUser);
          const leagues = await getMyLeagues(author.id);
          setMyLeagues(leagues);
        } finally {
          setIsLeaguesLoading(false);
        }
      }
    };

    fetchData();
  }, [loggedUser]);

  const createMyLeague = async (league: LeagueData) => {
    setIsLeaguesLoading(true);
    try {
      const author = verifyLoggedUser(loggedUser);
      const newLeague = await createLeague({
        ...league,
        author_id: author.id,
      });
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
