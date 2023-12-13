import { supabase } from "@/lib/superbase";

class UserService {
  userId: string | undefined;
  constructor(userId: string | undefined) {
    this.userId = userId;
  }
  async updateUsername(username: string): Promise<string> {
    if (!this.userId) {
      throw new Error("Aucun utilisateur connecté");
    }
    const { data: updateUserData, error: updateUsernameError } = await supabase
      .from("profiles")
      .upsert({
        user_id: this.userId,
        username,
      })
      .select();

    if (updateUsernameError) {
      throw updateUsernameError;
    }

    return updateUserData[0].username;
  }
}

export default UserService;
