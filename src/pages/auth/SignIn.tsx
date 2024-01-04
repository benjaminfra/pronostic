import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import DividerWithText from "@/components/divider/DividerWithText";
import LinkButton from "@/components/button/LinkButton";
import AuthBox from "@/components/auth/layout/AuthBox";
import AuthForm from "@/components/auth/AuthForm";

const SignIn = () => {
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setLoginError(true);
    }
    setIsLoading(false);
  };

  return (
    <AuthBox title={t("Auth.form.common.signIn")}>
      <AuthForm
        formErrorDescription={t("Auth.form.submit.login.error")}
        hasFormError={loginError}
        onSubmit={submit}
        submitLabel={t("Auth.form.submit.login.label")}
        isLoading={isLoading}
      />
      <div className="mt-5">
        <Link to="/reset-password" color="teal.500">
          {t("Auth.resetPassword.link")}
        </Link>
      </div>
      <div className="my-10">
        <DividerWithText text={t("common.or")} />
      </div>
      <div className="mt-5 text-center">
        <LinkButton to="/signup">{t("Auth.form.common.signUp")}</LinkButton>
      </div>
    </AuthBox>
  );
};

export default SignIn;
