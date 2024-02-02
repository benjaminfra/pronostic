import { LeagueContext } from "@/provider/LeagueProvider";
import { useContext, useState } from "react";
import LeagueCard from "./LeagueCard";
import Card from "../card/Card";
import { useTranslation } from "react-i18next";
import NewLeagueModal from "./NewLeagueModal";

const MyLeaguesBoard: React.FC = () => {
  const { myLeagues } = useContext(LeagueContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const { t } = useTranslation();

  return (
    <>
      <NewLeagueModal isOpen={isOpen} onClose={onCloseModal} />
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mx-0 mx-10 gap-6">
        <div className="hidden sm:block">
          <Card border="border-dashed" textColor="white" onClick={openModal}>
            <p>{t("Leagues.list.create")}</p>
          </Card>
        </div>
        {myLeagues.map((league) => (
          <LeagueCard key={league.id} league={league} />
        ))}
        <div className="md:hidden">
          <Card border="border-dashed" textColor="white" onClick={openModal}>
            <p>{t("Leagues.list.create")}</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MyLeaguesBoard;
