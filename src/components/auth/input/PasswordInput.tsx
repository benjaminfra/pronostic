import InputWithLabel from "@/components/form/InputWithLabel";
import { useTranslation } from "react-i18next";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const { t } = useTranslation();
  return (
    <InputWithLabel
      errorMsg={t("Auth.form.password.error")}
      id="password"
      label={t("Auth.form.password.label")}
      onChange={onChange}
      type="password"
      value={value}
      validation={{ minLength: 8 }}
      autoComplete="current-password"
    />
  );
};

export default PasswordInput;
