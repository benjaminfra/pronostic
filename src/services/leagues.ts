import { supabase } from "@/lib/superbase";
import { League, NewLeague } from "@/types/leagues";

export const createLeague: (league: NewLeague) => Promise<League> = async (
  league
) => {
  const { data: newLeague, error } = await supabase
    .from("leagues")
    .insert(league)
    .returns<League>();

  if (error) {
    console.error(error);
    throw new Error("Une erreur est survenue lors de la création de la ligue");
  }

  const { error: insertRefUsersError } = await supabase
    .from("ref_leagues_users")
    .insert([{ user_id: league.author_id, league_id: newLeague.id }]);

  if (insertRefUsersError) {
    console.error(insertRefUsersError);
    throw new Error(
      "Une erreur est survenue lors de l'ajout de l'auteur à la ligue"
    );
  }

  return newLeague;
};
