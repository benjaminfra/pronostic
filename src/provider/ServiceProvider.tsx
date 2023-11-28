import UserService from "@/services/user";
import { createContext, useContext, useMemo } from "react";
import { AuthContext } from "./AuthProvider";

type IServiceProvider = {
  children: React.ReactNode;
};

type IServiceContext = {
  userService: UserService;
};

export const ServiceContext = createContext<IServiceContext>({
  userService: new UserService(undefined),
});

const ServiceProvider = ({ children }: IServiceProvider) => {
  const { session } = useContext(AuthContext);

  const serviceContext = useMemo(
    () => ({
      userService: new UserService(session?.user?.id),
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
