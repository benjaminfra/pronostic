import InputWithLabel from "@/components/form/InputWithLabel";
import { useTranslation } from "react-i18next";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput = ({ value, onChange }: EmailInputProps) => {
  const { t } = useTranslation();
  return (
    <InputWithLabel
      errorMsg={t("Auth.form.email.error")}
      id="email"
      label={t("Auth.form.email.label")}
      onChange={onChange}
      type="email"
      value={value}
      autoComplete="email"
    />
  );
};

export default EmailInput;
