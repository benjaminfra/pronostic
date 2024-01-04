import { Team } from "./teams";

const FINISHED_STATUS = ["FT", "PEN", "AET"];
const IN_PLAYED_STATUS = ["1H", "2H", "HT", "ET", "BT", "P", "SUSP", "INT"];
const POSTPONED_STATUS = ["PST", "CANC", "ABD", "AWD"];
const NOT_STARTED_STATUS = ["NS", "TBD"];

export enum MatchStatus {
  FINISHED = "FINISHED",
  IN_PLAYED = "IN_PLAYED",
  POSTPONED = "POSTPONED",
  NOT_STARTED = "NOT_STARTED",
}

export interface Match {
  id: number;
  league: string;
  date: string | null;
  team_a: Team;
  team_b: Team;
  venue: string | null;
  status: MatchStatus;
  team_a_goal: number | null;
  team_b_goal: number | null;
  round: string;
  season: number;
}

export const convertStatus = (status: string | null) => {
  if (!status) throw new Error("Status is null");
  if (FINISHED_STATUS.includes(status)) {
    return MatchStatus.FINISHED;
  } else if (IN_PLAYED_STATUS.includes(status)) {
    return MatchStatus.IN_PLAYED;
  } else if (POSTPONED_STATUS.includes(status)) {
    return MatchStatus.POSTPONED;
  } else if (NOT_STARTED_STATUS.includes(status)) {
    return MatchStatus.NOT_STARTED;
  } else {
    throw new Error(`Unknown status: ${status}`);
  }
};
