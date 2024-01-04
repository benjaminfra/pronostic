import { createContext, useState } from "react";
import { Match, convertStatus } from "@/types/matchs";
import { supabase } from "@/lib/superbase";
import { Team } from "@/types/teams";
import { DateTime } from "luxon";
import { NO_DATE } from "@/constants/constants";
import { addToAccumulator } from "@/utils/ObjectUtils";

type IMatchContext = {
  getMatchsByRound: (
    round: number
  ) => Promise<{ [date: string]: Match[] } | undefined>;
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
  ) => Promise<{ [date: string]: Match[] } | undefined> = async (
    round: number
  ) => {
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
      .eq("round", `Regular Season - ${round.toString()}`)
      .order("date", { ascending: true });

    const { data, error } = await selectMatchsWithTeams;

    if (error) {
      setIsMatchLoading(false);
      console.error(error);
      throw new Error(
        "Une erreur est survenue lors de la récupération des matchs"
      );
    }

    if (data) {
      const matchsByDate = data.reduce((acc, dbMatch) => {
        const match: Match = {
          id: dbMatch.id,
          league: dbMatch.league,
          date: dbMatch.date,
          team_a: dbMatch.team_a as Team,
          team_b: dbMatch.team_b as Team,
          venue: dbMatch.venue,
          status: convertStatus(dbMatch.status),
          team_a_goal: dbMatch.team_a_goal,
          team_b_goal: dbMatch.team_b_goal,
          round: dbMatch.round,
          season: dbMatch.season,
        } as Match;

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

      setIsMatchLoading(false);
      return matchsByDate;
    }
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
