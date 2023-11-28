import { createContext, useState, useEffect } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { Session, User } from "@supabase/supabase-js";

type IAuthContext = {
  loggedUser: Profile | undefined;
  session: Session | null | undefined;
  isConnected: boolean;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  session: null,
  isConnected: false,
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<Profile | undefined>();
  const [session, setSession] = useState<Session | null>();
  const [isConnected, setIsConntected] = useState<boolean>(false);

  console.log("loggedUser", loggedUser);
  console.log("session", session?.user.id);
  console.log("isConnected", isConnected);

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

    supabase.auth.getSession().then(({ data: { session: authSession } }) => {
      if (authSession?.user) {
        if (!session || session.access_token !== authSession.access_token) {
          setSession(authSession);
        }
        if (!isConnected) {
          setIsConntected(true);
        }
        const sessionUser: User = authSession.user;
        if (!loggedUser || loggedUser.id !== sessionUser.id) {
          getLoggedUser(sessionUser);
        }
      }
    });
  }, [loggedUser, session, isConnected]);

  return (
    <AuthContext.Provider value={{ loggedUser, session, isConnected }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
