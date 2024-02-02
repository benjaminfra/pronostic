import { League } from "@/types/leagues";
import Card from "../card/Card";

type LeagueCardProps = {
  league: League;
  onClick?: () => void;
};

const LeagueCard: React.FC<LeagueCardProps> = ({ league, onClick }) => {
  return (
    <Card bgColor="bg-yellow-gradient" textColor="black" onClick={onClick}>
      {league.name}
    </Card>
  );
};

export default LeagueCard;
