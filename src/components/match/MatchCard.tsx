import { Match } from "@/types/matchs";
import TeamCard from "./team/TeamCard";
import MatchScore from "./MatchScore";

type MatchCardProps = {
  match: Match;
  isLoading?: boolean;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  console.log(match);
  return (
    <>
      <div className="flex items-center">
        <div className="flex-1">
          <TeamCard team={match.team_a} />
        </div>
        <MatchScore
          matchStatus={match.status}
          teamAGoal={match.team_a_goal}
          teamBGoal={match.team_b_goal}
        />
        <div className="flex-1">
          <TeamCard team={match.team_b} />
        </div>
      </div>
    </>
  );
};

export default MatchCard;
