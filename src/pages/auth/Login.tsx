import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";

const Login = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (email: string, password: string) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <AuthForm
      formErrorDescription={t("Auth.form.submit.login.error")}
      hasFormError={loginError}
      onSubmit={submit}
      submitLabel={t("Auth.form.submit.login.label")}
    />
  );
};

export default Login;
