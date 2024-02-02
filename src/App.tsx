import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ProfileButton from "./components/profile/ProfileButton";
import { AuthContext } from "./provider/AuthProvider";
import Menu from "./components/menu/Menu";
import PageContent from "./components/layout/PageContent";
import Footer from "./components/footer/Footer";

const App = () => {
  const { loggedUser, isUserLoading } = useContext(AuthContext);
  return (
    <>
      <Menu />
      <ProfileButton isLoading={isUserLoading} loggedUser={loggedUser} />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
};

export default App;
