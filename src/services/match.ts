import { supabase } from "@/lib/superbase";
import { Match } from "@/types/matchs";

class MatchService {
  async getMatchsByRound(round: string): Promise<Match[] | undefined> {
    const { data, error } = await supabase
      .from("matchs")
      .select()
      .like("round", round);
    if (error) {
      throw new Error(
        "Une erreur est survenue lors de la récupération des matchs"
      );
    }
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
  }
}

export default MatchService;
