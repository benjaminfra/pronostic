import { LeagueContext } from "@/provider/LeagueProvider";
import { useContext } from "react";
import LeagueCard from "./LeagueCard";
import Card from "../card/Card";

const MyLeaguesBoard: React.FC = () => {
  const { myLeagues } = useContext(LeagueContext);

  return (
    <div className="grid grid-cols-3 gap-4">
      <button>
        <Card>
          <p className="text-2xl font-bold">Nouvelle league</p>
        </Card>
      </button>
      {myLeagues.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </div>
  );
};

export default MyLeaguesBoard;
