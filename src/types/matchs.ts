export interface Match {
  id: number;
  league: string;
  date: Date | null;
  team_a: string;
  team_b: string;
  venue: string | null;
  status: string | null;
  team_a_goal: number | null;
  team_b_goal: number | null;
  round: string;
  season: number;
}
