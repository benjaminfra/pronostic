import { useTranslation } from "react-i18next";
import AlertTitle from "../common/AlertTitle";
import AlertDescription from "../common/AlertDescription";
import AlertErrorIcon from "./icon/AlertErrorIcon";

const ErrorAlert: React.FC<{ description: string }> = ({ description }) => {
  const { t } = useTranslation();

  return (
    <div className="border-solid rounded bg-rose-200 px-2 py-4 flex items-center">
      <div className="px-1" data-test="alert-icon">
        <AlertErrorIcon />
      </div>
      <div className="px-1" data-test="alert-content">
        <AlertTitle>{t("common.error.title")}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </div>
    </div>
  );
};

export default ErrorAlert;
