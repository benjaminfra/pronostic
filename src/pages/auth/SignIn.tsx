import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (email: string, password: string) => {
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <>
      <AuthForm
        formErrorDescription={t("Auth.form.submit.login.error")}
        hasFormError={loginError}
        onSubmit={submit}
        submitLabel={t("Auth.form.submit.login.label")}
      />
      <Link to="/reset-password">{t("Auth.resetPassword.link")}</Link>
    </>
  );
};

export default SignIn;
