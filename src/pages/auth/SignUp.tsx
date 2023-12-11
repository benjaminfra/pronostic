import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import DividerWithText from "@/components/divider/DividerWithText";
import LinkButton from "@/components/button/LinkButton";
import AuthBox from "@/components/auth/layout/AuthBox";
import AuthForm from "@/components/auth/AuthForm";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signUpWithRandomUsername } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submit = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signUpWithRandomUsername(email, password);
      navigate("/confirm");
    } catch (error) {
      setSignUpError(true);
    }
    setIsLoading(false);
  };

  return (
    <AuthBox title={t("Auth.form.common.signUp")}>
      <AuthForm
        formErrorDescription={t("Auth.form.submit.signup.error")}
        hasFormError={signUpError}
        onSubmit={submit}
        submitLabel={t("Auth.form.submit.signup.label")}
        isLoading={isLoading}
      />

      <DividerWithText text={t("common.or")} />
      <div className="mt-5 text-center">
        <LinkButton to="/signin">{t("Auth.form.common.signIn")}</LinkButton>
      </div>
    </AuthBox>
  );
};

export default SignUp;
