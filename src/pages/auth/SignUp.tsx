import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import ErrorAlert from "@/components/alert/ErrorAlert";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<boolean>(false);
  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setHasEmailError(!EMAIL_REGEX.test(e.target.value));
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasPasswordError(e.target.value.length < 8);
  };

  const submit = async () => {
    try {
      await signUp(email, password);
      navigate("/confirm");
    } catch (error) {
      setSignUpError(true);
    }
  };

  const isFormDisabled =
    password === "" || email === "" || hasEmailError || hasPasswordError;

  return (
    <>
      {signUpError && (
        <ErrorAlert description={t("Auth.form.submit.signup.error")} />
      )}
      <FormControl isRequired isInvalid={hasEmailError}>
        <FormLabel>{t("Auth.form.email.label")}</FormLabel>
        <Input type="email" value={email} onChange={updateEmail} />
        {hasEmailError && (
          <FormErrorMessage>{t("Auth.form.email.error")}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={hasPasswordError}>
        <FormLabel>{t("Auth.form.password.label")}</FormLabel>
        <Input type="password" value={password} onChange={updatePassword} />
        {hasPasswordError && (
          <FormErrorMessage>{t("Auth.form.password.error")}</FormErrorMessage>
        )}
      </FormControl>
      <Button onClick={submit} isDisabled={isFormDisabled}>
        {t("Auth.form.submit.signup.label")}
      </Button>
    </>
  );
};

export default SignUp;
