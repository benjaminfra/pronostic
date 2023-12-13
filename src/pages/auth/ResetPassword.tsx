import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { EMAIL_REGEX } from "../../constants/constants";
import { AuthContext } from "@/provider/AuthProvider";
import Button from "@/components/button/Button";
import EmailInput from "@/components/auth/input/EmailInput";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendPasswordLink(email);
    setIsOk(true);
  };

  const isSubmitDisabled = email === "" || hasEmailError;

  const okComponent = <>toto</>;

  if (isOk) {
    return okComponent;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <EmailInput onChange={updateEmail} value={email} />
        </div>
        <Button type="submit" disabled={isSubmitDisabled}>
          {t("common.button.send.title")}
        </Button>
      </form>
    );
  }
};

export default ResetPassword;
