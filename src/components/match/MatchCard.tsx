import { Match } from "@/types/matchs";
import TeamCard from "./team/TeamCard";
import InputNumber from "../input/InputNumber";

type MatchCardProps = {
  match: Match;
  isLoading?: boolean;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <>
      <div className="flex-1">
        <TeamCard team={match.team_a} />
      </div>
      <div className="flex-none mx-2">
        <InputNumber className="w-16 h-full" />
      </div>
      <div className="flex-none mx-2">
        <InputNumber className="w-16 h-full" />
      </div>
      <div className="flex-1">
        <TeamCard team={match.team_b} isAway={true} />
      </div>
    </>
  );
};

export default MatchCard;
