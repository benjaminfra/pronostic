import { supabase } from "@/lib/superbase";
import { Match, convertStatus } from "@/types/matchs";
import { Team } from "@/types/teams";

export const getMatchsByRound: (round: number) => Promise<Match[]> = async (
  round
) => {
  const { data, error } = await supabase
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

  if (error) {
    console.error(error);
    throw new Error(
      "Une erreur est survenue lors de la récupération des matchs"
    );
  }

  const matchs = data.map(
    (dbMatch) =>
      ({
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
      } as Match)
  );

  return matchs;
};
