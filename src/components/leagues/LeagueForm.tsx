import { LeagueContext } from "@/provider/LeagueProvider";
import { useContext, useState } from "react";
import InputWithLabel from "../form/InputWithLabel";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
import ErrorAlert from "../alert/error/ErrorAlert";

type LeagueFormProps = {
  onSubmit: () => void;
};

const LeagueForm: React.FC<LeagueFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { createMyLeague, isLeaguesLoading } = useContext(LeagueContext);
  const [leagueName, setLeagueName] = useState<string>("");
  const [hasFormError, setHasFormError] = useState<boolean>(false);
  const NAME_REGEX = /^.{1,40}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMyLeague({
      name: leagueName,
    });
    onSubmit();
  };

  const updateLeagueName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeagueName(e.target.value);
    setHasFormError(!NAME_REGEX.test(e.target.value));
  };

  const isFormDisabled = leagueName === "" || hasFormError;

  return (
    <form onSubmit={handleSubmit}>
      {hasFormError && (
        <div className="my-5">
          <ErrorAlert description={t("Leagues.form.submit.error")} />
        </div>
      )}
      <div className="mt-5">
        <InputWithLabel
          errorMsg={t("Leagues.form.name.error")}
          id="leagueName"
          label={t("Leagues.form.name.label")}
          onChange={updateLeagueName}
          type="text"
          value={leagueName}
          maxLength={40}
          minLength={1}
        />
      </div>
      <div className="mt-10">
        <Button
          size="full"
          type="submit"
          disabled={isFormDisabled}
          isLoading={isLeaguesLoading}
          dataTest="submitBtn"
        >
          {t("common.button.create.title")}
        </Button>
      </div>
    </form>
  );
};

export default LeagueForm;
