import ErrorAlert from "@/components/alert/error/ErrorAlert";
import { AuthContext } from "@/provider/AuthProvider";
import { getErrorMessage } from "@/utils/ErrorUtils";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | undefined>();

  const { updatePassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const updateCurrentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasPasswordError(e.target.value.length < 8);
  };

  const submit = async () => {
    try {
      await updatePassword(password);
      navigate("/signin");
    } catch (error: unknown) {
      const message = getErrorMessage(error);
      setFormError(message);
    }
  };

  const { t } = useTranslation();

  const isSubmitDisabled = password === "" || hasPasswordError;

  return (
    <>
      {formError && <ErrorAlert description={formError} />}
      <FormControl>
        <FormLabel>{t("Auth.form.password.label")}</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={updateCurrentPassword}
        />
        {hasPasswordError && (
          <FormErrorMessage>{t("Auth.form.password.error")}</FormErrorMessage>
        )}
      </FormControl>
      <Button onClick={submit} isDisabled={isSubmitDisabled}>
        {t("common.button.update.title")}
      </Button>
    </>
  );
};

export default UpdatePassword;
