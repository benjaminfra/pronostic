import { useState } from "react";
import { EMAIL_REGEX } from "../../constants/constants";
import Button from "@/components/button/Button";
import ErrorAlert from "@/components/alert/error/ErrorAlert";
import EmailInput from "./input/EmailInput";
import PasswordInput from "./input/PasswordInput";

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

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setHasEmailError(!EMAIL_REGEX.test(e.target.value));
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setHasPasswordError(e.target.value.length < 8);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const isFormDisabled =
    password === "" || email === "" || hasEmailError || hasPasswordError;

  return (
    <form onSubmit={handleSubmit}>
      {hasFormError && (
        <div className="my-5">
          <ErrorAlert description={formErrorDescription} />
        </div>
      )}
      <div className="mt-5">
        <EmailInput onChange={updateEmail} value={email} />
      </div>
      <div className="mt-5">
        <PasswordInput onChange={updatePassword} value={password} />
      </div>
      <div className="mt-10">
        <Button
          size="full"
          type="submit"
          disabled={isFormDisabled}
          isLoading={isLoading}
          dataTest="submitBtn"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
