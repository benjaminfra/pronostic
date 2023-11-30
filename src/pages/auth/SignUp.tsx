import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState<boolean>(false);
  const { signUpWithRandomUsername } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (email: string, password: string) => {
    try {
      await signUpWithRandomUsername(email, password);
      navigate("/confirm");
    } catch (error) {
      setSignUpError(true);
    }
  };

  return (
    <AuthForm
      formErrorDescription={t("Auth.form.submit.signup.error")}
      hasFormError={signUpError}
      onSubmit={submit}
      submitLabel={t("Auth.form.submit.signup.label")}
    />
  );
};

export default SignUp;
