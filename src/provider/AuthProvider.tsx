import { createContext, useState, useEffect } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { User } from "@supabase/supabase-js";

type IAuthContext = {
  loggedUser: Profile | undefined;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<Profile>();

  useEffect(() => {
    const getLoggedUser: (sessionUser: User) => void = async (
      sessionUser: User
    ) => {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("user_id", sessionUser.id)
        .single();
      if (error || !data) {
        throw new Error("Une erreur est survenue lors de la connexion");
      }
      setLoggedUser({ id: data.user_id, username: data.username });
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const sessionUser: User = session.user;
        getLoggedUser(sessionUser);
      }
    });
  });

  return (
    <AuthContext.Provider value={{ loggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;