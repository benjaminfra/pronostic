import { supabase } from "@/lib/superbase";
import { League, NewLeague } from "@/types/leagues";

export const createLeague: (league: NewLeague) => Promise<League> = async (
  league
) => {
  const { data: newLeague, error } = await supabase
    .from("leagues")
    .insert(league)
    .select()
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Une erreur est survenue lors de la création de la ligue");
  }

  const { error: insertRefUsersError } = await supabase
    .from("ref_leagues_users")
    .insert([{ user_id: league.author_id, league_id: newLeague.id }]);

  if (insertRefUsersError) {
    console.error(insertRefUsersError);
    await supabase.from("leagues").delete().match({ id: newLeague.id });
    throw new Error(
      "Une erreur est survenue lors de l'ajout de l'auteur à la ligue"
    );
  }

  return newLeague;
};

export const getMyLeagues: (userId: string) => Promise<League[]> = async (
  userId
) => {
  const { data: rawLeagues, error } = await supabase
    .from("ref_leagues_users")
    .select("leagues(*)")
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error(
      "Une erreur est survenue lors de la récupération des ligues"
    );
  }

  if (!rawLeagues) {
    return [];
  }

  const leagues: League[] = rawLeagues
    .filter((item) => item.leagues !== null)
    .map((item) => {
      const { id, author_id, created_at, name } = item.leagues!;
      return { id, author_id, created_at, name };
    });

  return leagues;
};
