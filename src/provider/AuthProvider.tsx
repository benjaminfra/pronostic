import { createContext, useState } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { Session, User } from "@supabase/supabase-js";
import { generateRandomUsername } from "@/utils/ProfileUtils";

type IAuthContext = {
  loggedUser: Profile | undefined;
  session: Session | null | undefined;
  signUpWithRandomUsername: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  sendPasswordLink: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  session: undefined,
  signUpWithRandomUsername: async () => {},
  signIn: async () => {},
  sendPasswordLink: async () => {},
  updatePassword: async () => {},
});
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<Profile | undefined>();
  const [session, setSession] = useState<Session | null>();

  const getLoggedUser: (sessionUser: User) => Promise<Profile> = async (
    sessionUser: User
  ) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_id", sessionUser.id)
      .single();
    if (error || !data) {
      throw new Error(
        "Une erreur est survenue lors de la récupération du profile utilisateur"
      );
    }
    const profile: Profile = {
      id: data.user_id,
      username: data.username,
    };
    return profile;
  };

  const sendPasswordLink = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/update-password",
    });
    if (error) {
      throw new Error("Une erreur est survenue");
    }
  };

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password,
    });
    if (error) {
      throw new Error(
        "Une erreur est survenue lors de la modification de l'utilisateur"
      );
    }
  };

  const signUpWithRandomUsername = async (email: string, password: string) => {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (signUpError || !data.user) {
      throw new Error("Une erreur est survenue lors de l'inscription");
    }

    const { error: updateProfileError } = await supabase
      .from("profiles")
      .insert({ user_id: data.user.id, username: generateRandomUsername() });

    if (updateProfileError) {
      throw new Error("Une erreur est survenue lors de la création de profil");
    }
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error("Une erreur est survenue lors de la connexion");
    }
    setSession(data.session);
    const userProfile = await getLoggedUser(data.user);
    setLoggedUser(userProfile);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        session,
        signUpWithRandomUsername,
        signIn,
        sendPasswordLink,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
