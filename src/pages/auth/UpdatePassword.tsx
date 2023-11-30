import ErrorAlert from "@/components/alert/ErrorAlert";
import { AuthContext } from "@/provider/AuthProvider";
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
  const [hasFormError, setHasFormError] = useState<boolean>(false);

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
    } catch (error) {
      setHasFormError(true);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      {hasFormError && (
        <ErrorAlert description={t("Auth.form.submit.resetPassword.error")} />
      )}
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
      <Button onClick={submit}>{t("common.button.update.title")}</Button>
    </>
  );
};

export default UpdatePassword;
