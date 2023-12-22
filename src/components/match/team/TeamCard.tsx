import { Team } from "@/types/teams";
import TeamBox from "./TeamBox";

type TeamCardProps = {
  team: Team;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <TeamBox>
      <div className="flex-none">
        <img src={team.logo} className="w-16 h-16" />
      </div>
      <div className="font-semi-bold flex-1 m-2 text-center">{team.name}</div>
    </TeamBox>
  );
};

export default TeamCard;
