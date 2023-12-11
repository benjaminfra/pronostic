import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Avatar from "./components/profile/Avatar";
import { AuthContext } from "./provider/AuthProvider";

const App = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <>
      <Avatar loggedUser={loggedUser} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
