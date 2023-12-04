import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ErrorAlert from "@/components/alert/error/ErrorAlert";
import { EMAIL_REGEX } from "../constants/constants";

type AuthFormProperties = {
  onSubmit: (email: string, password: string) => void;
  hasFormError: boolean;
  formErrorDescription: string;
  submitLabel: string;
  isLoading?: boolean;
};

const AuthForm = ({
  onSubmit,
  hasFormError,
  formErrorDescription,
  submitLabel,
  isLoading = false,
}: AuthFormProperties) => {
  const [email, setEmail] = useState<string>("");
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);

  const { t } = useTranslation();

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setHasEmailError(!EMAIL_REGEX.test(e.target.value));
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasPasswordError(e.target.value.length < 8);
  };

  const isFormDisabled =
    password === "" || email === "" || hasEmailError || hasPasswordError;

  return (
    <>
      {hasFormError && (
        <Box my="2em">
          <ErrorAlert description={formErrorDescription} />
        </Box>
      )}
      <Box my="1em">
        <FormControl isRequired isInvalid={hasEmailError}>
          <FormLabel>{t("Auth.form.email.label")}</FormLabel>
          <Input type="email" value={email} onChange={updateEmail} />
          {hasEmailError && (
            <FormErrorMessage>{t("Auth.form.email.error")}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box my="1em">
        <FormControl isRequired isInvalid={hasPasswordError}>
          <FormLabel>{t("Auth.form.password.label")}</FormLabel>
          <Input type="password" value={password} onChange={updatePassword} />
          {hasPasswordError && (
            <FormErrorMessage>{t("Auth.form.password.error")}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box mt="2em">
        <Button
          isLoading={isLoading}
          onClick={() => onSubmit(email, password)}
          isDisabled={isFormDisabled}
          size="md"
          width="100%"
          colorScheme="yellow"
        >
          {submitLabel}
        </Button>
      </Box>
    </>
  );
};

export default AuthForm;
