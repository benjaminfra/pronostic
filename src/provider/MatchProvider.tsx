import { createContext, useState } from "react";
import { Match } from "@/types/matchs";
import { supabase } from "@/lib/superbase";

type IMatchContext = {
  getMatchsByRound: (round: number) => Promise<Match[] | undefined>;
  isMatchLoading: boolean;
};

export const MatchContext = createContext<IMatchContext>({
  getMatchsByRound: () => Promise.resolve(undefined),
  isMatchLoading: false,
});

const MatchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMatchLoading, setIsMatchLoading] = useState<boolean>(false);

  const getMatchsByRound: (
    round: number
  ) => Promise<Match[] | undefined> = async (round: number) => {
    setIsMatchLoading(true);

    const { data, error } = await supabase
      .from("matchs")
      .select()
      .eq("round", `Regular Season - ${round.toString()}`);

    if (error) {
      setIsMatchLoading(false);
      throw new Error(
        "Une erreur est survenue lors de la récupération des matchs"
      );
    }
    setIsMatchLoading(true);
    return data?.map(
      (match) =>
        ({
          id: match.id,
          league: match.league,
          date: match.date,
          team_a: match.team_a,
          team_b: match.team_b,
          venue: match.venue,
          status: match.status,
          team_a_goal: match.team_a_goal,
          team_b_goal: match.team_b_goal,
          round: match.round,
          season: match.season,
        } as Match)
    );
  };

  return (
    <MatchContext.Provider
      value={{
        getMatchsByRound,
        isMatchLoading,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export default MatchProvider;
