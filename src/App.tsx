import Button from "./components/button/Button";
import AuthLayout from "./pages/auth/components/AuthLayout";
import AuthForm from "./pages/auth/components/NewAuthForm";

const App = () => {
  return (
    <AuthLayout title="Se connecter">
      <AuthForm
        formErrorDescription=""
        hasFormError={false}
        onSubmit={() => {}}
        submitLabel="Connexion"
        isLoading={false}
      />{" "}
    </AuthLayout>
  );
};

export default App;
