import { createContext, useState, useEffect } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { Session, User } from "@supabase/supabase-js";

type IAuthContext = {
  loggedUser: Profile | undefined;
  session: Session | null | undefined;
  signUp: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  session: undefined,
  signUp: async () => {},
});
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<Profile | undefined>();
  const [session, setSession] = useState<Session | null>();

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw new Error("Une erreur est survenue lors de l'inscription");
    }
  };

  return (
    <AuthContext.Provider value={{ loggedUser, session, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
