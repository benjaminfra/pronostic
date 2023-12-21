import { Team } from "@/types/teams";
import TeamBox from "./TeamBox";

type TeamCardProps = {
  team: Team;
  isAway?: boolean;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, isAway = false }) => {
  return (
    <TeamBox isAway={isAway}>
      <div className={`flex-none`}>
        <img src={team.logo} className="w-14 h-14" />
      </div>
      <div className="flex-1 text-center">{team.name}</div>
    </TeamBox>
  );
};

export default TeamCard;
