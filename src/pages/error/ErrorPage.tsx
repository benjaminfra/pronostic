import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div id="error-page">
      <h1>{t("Error.title")}</h1>
      <p>{t("Error.description")}</p>
    </div>
  );
};

export default ErrorPage;
