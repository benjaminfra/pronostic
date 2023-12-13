import UserService from "@/services/user";
import { createContext, useContext, useMemo } from "react";
import { AuthContext } from "./AuthProvider";
import MatchService from "@/services/match";

type IServiceProvider = {
  children: React.ReactNode;
};

type IServiceContext = {
  userService: UserService;
  matchService: MatchService;
};

export const ServiceContext = createContext<IServiceContext>({
  userService: new UserService(undefined),
  matchService: new MatchService(),
});

const ServiceProvider = ({ children }: IServiceProvider) => {
  const { session } = useContext(AuthContext);

  const serviceContext = useMemo(
    () => ({
      userService: new UserService(session?.user?.id),
      matchService: new MatchService(),
    }),
    [session]
  );

  return (
    <ServiceContext.Provider value={serviceContext}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
