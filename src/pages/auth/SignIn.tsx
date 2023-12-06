import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as CharkaLink } from "@chakra-ui/react";
import AuthLayout from "./components/AuthLayout";
import DividerWithText from "@/components/divider/DividerWithText";
import LinkButton from "@/components/button/LinkButton";

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
    <AuthLayout title={t("Auth.form.common.signIn")}>
      <AuthForm
        formErrorDescription={t("Auth.form.submit.login.error")}
        hasFormError={loginError}
        onSubmit={submit}
        submitLabel={t("Auth.form.submit.login.label")}
        isLoading={isLoading}
      />
      <Box mt="1em">
        <CharkaLink as={ReactRouterLink} to="/reset-password" color="teal.500">
          {t("Auth.resetPassword.link")}
        </CharkaLink>
      </Box>
      <DividerWithText text={t("common.or")} />
      <Box mt="2em" textAlign="center">
        <LinkButton to="/signup">{t("Auth.form.common.signUp")}</LinkButton>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
