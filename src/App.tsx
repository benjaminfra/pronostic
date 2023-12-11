import AuthForm from "@/components/auth/AuthForm";
import AuthBox from "@/components/auth/layout/AuthBox";

const App = () => {
  return (
    <AuthBox title="Se connecter">
      <AuthForm
        formErrorDescription="Erreur"
        hasFormError={false}
        onSubmit={() => {}}
        submitLabel="Connexion"
        isLoading={false}
      />{" "}
    </AuthBox>
  );
};

export default App;
