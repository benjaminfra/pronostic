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
      <div className="flex items-center">
        <div className="flex-1">
          <TeamCard team={match.team_a} />
        </div>
        <div className="flex-none mx-2">
          <InputNumber className="w-16 h-16" />
        </div>
        <div className="flex-none mx-2">
          <InputNumber className="w-16 h-16" />
        </div>
        <div className="flex-1">
          <TeamCard team={match.team_b} />
        </div>
      </div>
    </>
  );
};

export default MatchCard;
