export type LeagueData = {
  name: string;
};

export type NewLeague = {
  author_id: string;
} & LeagueData;

export type League = {
  id: number;
} & NewLeague;
