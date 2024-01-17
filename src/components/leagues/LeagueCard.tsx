import { League } from "@/types/leagues";
import Card from "../card/Card";

const LeagueCard: React.FC<{ league: League }> = ({ league }) => {
  return (
    <Card>
      <p className="text-2xl font-bold">{league.name}</p>
    </Card>
  );
};

export default LeagueCard;
