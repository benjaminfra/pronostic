import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import { Box } from "@chakra-ui/react";
import AuthLayout from "./components/AuthLayout";
import DividerWithText from "@/components/divider/DividerWithText";
import LinkButton from "@/components/button/LinkButton";

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
    <AuthLayout title={t("Auth.form.common.signUp")}>
      <AuthForm
        formErrorDescription={t("Auth.form.submit.signup.error")}
        hasFormError={signUpError}
        onSubmit={submit}
        submitLabel={t("Auth.form.submit.signup.label")}
        isLoading={isLoading}
      />

      <DividerWithText text={t("common.or")} />
      <Box mt="2em" textAlign="center">
        <LinkButton to="/signin">{t("Auth.form.common.signIn")}</LinkButton>
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
