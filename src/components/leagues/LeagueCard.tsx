import { League } from "@/types/leagues";
import Card from "../card/Card";

const LeagueCard: React.FC<{ league: League }> = ({ league }) => {
  return (
    <Card bgColor="bg-yellow-gradient" textColor="black">
      {league.name}
    </Card>
  );
};

export default LeagueCard;
