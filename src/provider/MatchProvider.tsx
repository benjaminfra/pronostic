import { createContext, useState } from "react";
import { Match } from "@/types/matchs";
import { supabase } from "@/lib/superbase";
import { Team } from "@/types/teams";

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

    const selectMatchsWithTeams = supabase
      .from("matchs")
      .select(
        `
        id,
        league,
        date,
        venue,
        status,
        team_a_goal,
        team_b_goal,
        round,
        season,
        team_a:teams!matchs_team_a_fkey(*),
        team_b:teams!matchs_team_b_fkey(*)
        `
      )
      .eq("round", `Regular Season - ${round.toString()}`);

    const { data, error } = await selectMatchsWithTeams;

    if (error) {
      setIsMatchLoading(false);
      console.error(error);
      throw new Error(
        "Une erreur est survenue lors de la récupération des matchs"
      );
    }
    setIsMatchLoading(false);

    return data?.map(
      (match) =>
        ({
          id: match.id,
          league: match.league,
          date: match.date,
          team_a: match.team_a as Team,
          team_b: match.team_b as Team,
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
