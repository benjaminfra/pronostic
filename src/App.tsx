import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ProfileButton from "./components/profile/ProfileButton";
import { AuthContext } from "./provider/AuthProvider";

const App = () => {
  const { loggedUser, isUserLoading } = useContext(AuthContext);
  return (
    <>
      <ProfileButton isLoading={isUserLoading} loggedUser={loggedUser} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
