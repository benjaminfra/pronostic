import { createContext, useState, useEffect } from "react";
import { supabase } from "@/lib/superbase";
import { Profile } from "@/types/users";
import { Session, User } from "@supabase/supabase-js";
import { generateRandomUsername } from "@/utils/ProfileUtils";
import i18n from "../lang";

type IAuthContext = {
  loggedUser: Profile | undefined;
  session: Session | null | undefined;
  isUserLoading: boolean;
  signUpWithRandomUsername: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  sendPasswordLink: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  session: undefined,
  isUserLoading: false,
  signUpWithRandomUsername: async () => {},
  signIn: async () => {},
  sendPasswordLink: async () => {},
  updatePassword: async () => {},
  signOut: async () => {},
});
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedUser, setLoggedUser] = useState<Profile | undefined>();
  const [session, setSession] = useState<Session | null>();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!session) {
      setIsUserLoading(true);
      supabase.auth
        .getSession()
        .then(({ data }) => {
          const currentSession = data.session;
          if (currentSession) {
            setSession(currentSession);
            getLoggedUser(currentSession.user)
              .then((profile) => {
                setLoggedUser(profile);
                setIsUserLoading(false);
              })
              .catch((error) => {
                setIsUserLoading(false);
                throw new Error(error);
              });
          } else {
            setIsUserLoading(false);
          }
        })
        .catch(() => {
          setIsUserLoading(false);
          throw new Error("Impossible de synchronizer les sessions");
        });
    }
  }, [session]);

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
      if (error.status === 422) {
        throw new Error(
          i18n.t("Auth.form.submit.updatePassword.error.samePassword")
        );
      }
    }
  };

  const signUpWithRandomUsername = async (email: string, password: string) => {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (signUpError || !data.user) {
      throw new Error("An error occured during the sign up");
    }

    const { error: updateProfileError } = await supabase
      .from("profiles")
      .insert({ user_id: data.user.id, username: generateRandomUsername() });

    if (updateProfileError) {
      throw new Error("An error occured during the profile update");
    }
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error("An error occured during the sign in");
    }
    setSession(data.session);
    const userProfile = await getLoggedUser(data.user);
    setLoggedUser(userProfile);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error("An error occured during the sign out");
    }
    setSession(null);
    setLoggedUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        session,
        isUserLoading,
        signUpWithRandomUsername,
        signIn,
        sendPasswordLink,
        updatePassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
