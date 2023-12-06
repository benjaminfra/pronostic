import FormLabel from "@/components/form/FormLabel";
import Input from "@/components/form/Input";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EMAIL_REGEX } from "../constants/constants";
import Button from "@/components/button/Button";

type AuthFormProperties = {
  onSubmit: (email: string, password: string) => void;
  hasFormError: boolean;
  formErrorDescription: string;
  submitLabel: string;
  isLoading?: boolean;
};

const AuthForm: React.FC<AuthFormProperties> = ({
  onSubmit,
  hasFormError,
  formErrorDescription,
  submitLabel,
  isLoading = false,
}) => {
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
    <form>
      <div className="mt-5">
        <FormLabel>{t("Auth.form.email.label")}</FormLabel>
        <div className="mt-2">
          <Input type="email" id="email" value={email} onChange={updateEmail} />
        </div>
      </div>
      <div className="mt-5">
        <FormLabel>{t("Auth.form.password.label")}</FormLabel>
        <div className="mt-2">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={updatePassword}
          />
        </div>
      </div>
      <div className="mt-10">
        <Button
          size="full"
          type="submit"
          onClick={() => onSubmit(email, password)}
          disabled={isFormDisabled}
          isLoading={isLoading}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
