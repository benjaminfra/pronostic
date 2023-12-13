const RANDOM_PROFILE_PREFIX = "Poney";

export const generateRandomUsername: () => string = () => {
  return RANDOM_PROFILE_PREFIX + Math.random() * 10000;
};
