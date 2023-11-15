import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./lib/superbase";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

function App() {
  const { loggedUser } = useContext(AuthContext);
  return (
    <div>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      <div>ID user : {loggedUser?.id}</div>
    </div>
  );
}

export default App;
