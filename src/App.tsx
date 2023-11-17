import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./lib/superbase";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Profile from "./pages/profile/Profile";

function App() {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div>
      <Profile user_id="toto" />
    </div>
  );
}

export default App;
