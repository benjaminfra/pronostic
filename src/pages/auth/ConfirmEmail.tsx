import LinkButton from "@/components/button/LinkButton";
import { useTranslation } from "react-i18next";

const ConfirmEmail = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("ConfirmEmail.description")}</div>
      <div>
        <LinkButton to="/">{t("ConfirmEmail.redirect")}</LinkButton>
      </div>
    </>
  );
};

export default ConfirmEmail;
