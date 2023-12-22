import { Team } from "./teams";

export interface Match {
  id: number;
  league: string;
  date: string | null;
  team_a: Team;
  team_b: Team;
  venue: string | null;
  status: string | null;
  team_a_goal: number | null;
  team_b_goal: number | null;
  round: string;
  season: number;
}
