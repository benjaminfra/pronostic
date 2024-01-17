import { Profile } from "@/types/users";

const RANDOM_PROFILE_PREFIX = "Poney";

export const generateRandomUsername: () => string = () => {
  return RANDOM_PROFILE_PREFIX + Math.random() * 10000;
};

export const verifyLoggedUser: (loggedUser: Profile | undefined) => Profile = (
  loggedUser
) => {
  if (loggedUser === undefined) {
    throw new Error("Utilisateur non connecté");
  }
  return loggedUser;
};
