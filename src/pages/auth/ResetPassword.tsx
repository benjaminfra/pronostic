import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { EMAIL_REGEX } from "./constants/constants";
import { AuthContext } from "@/provider/AuthProvider";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isOk, setIsOk] = useState<boolean>(false);
  const [hasEmailError, setHasEmailError] = useState<boolean>(false);

  const { sendPasswordLink } = useContext(AuthContext);
  const { t } = useTranslation();

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setHasEmailError(!EMAIL_REGEX.test(e.target.value));
  };

  const submit = async () => {
    await sendPasswordLink(email);
    setIsOk(true);
  };

  const isSubmitDisabled = email === "" || hasEmailError;

  const okComponent = <>toto</>;

  if (isOk) {
    return okComponent;
  } else {
    return (
      <>
        <FormControl isRequired isInvalid={hasEmailError}>
          <FormLabel>{t("Auth.form.email.label")}</FormLabel>
          <Input type="email" value={email} onChange={updateEmail} />
          {hasEmailError && (
            <FormErrorMessage>{t("Auth.form.email.error")}</FormErrorMessage>
          )}
        </FormControl>
        <Button onClick={submit} isDisabled={isSubmitDisabled}>
          {t("common.button.send.title")}
        </Button>
      </>
    );
  }
};

export default ResetPassword;
