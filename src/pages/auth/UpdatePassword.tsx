import ErrorAlert from "@/components/alert/error/ErrorAlert";
import PasswordInput from "@/components/auth/input/PasswordInput";
import Button from "@/components/button/Button";
import { AuthContext } from "@/provider/AuthProvider";
import { getErrorMessage } from "@/utils/ErrorUtils";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      {formError && <ErrorAlert description={formError} />}
      <PasswordInput onChange={updateCurrentPassword} value={password} />
      <Button disabled={isSubmitDisabled}>
        {t("common.button.update.title")}
      </Button>
    </form>
  );
};

export default UpdatePassword;
