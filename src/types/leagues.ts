export type NewLeague = {
  name: string;
  author_id: string;
};

export type League = {
  id: number;
} & NewLeague;
