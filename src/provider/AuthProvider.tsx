import { createContext, useState } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { Session, User } from "@supabase/supabase-js";

type IAuthContext = {
  loggedUser: Profile | undefined;
  session: Session | null | undefined;
  signUp: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  session: undefined,
  signUp: async () => {},
  login: async () => {},
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

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw new Error("Une erreur est survenue lors de l'inscription");
    }
  };

  const login = async (email: string, password: string) => {
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
    <AuthContext.Provider value={{ loggedUser, session, signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
