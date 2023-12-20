import { Team } from "@/types/teams";

type TeamCardProps = {
  team: Team;
  isAway?: boolean;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, isAway = false }) => {
  const img = (
    <div className={`flex-none`}>
      <img src={team.logo} className="w-14 h-14" />
    </div>
  );

  const name = <div className={`flex-1 text-center`}>{team.name}</div>;

  return (
    <div className={`relative w-52 ${isAway ? "" : "float-right"}`}>
      <div
        className={`overflow-hidden flex items-center justify-center p-2 ${
          isAway ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <>
          {img}
          {name}
        </>
      </div>
    </div>
  );
};

export default TeamCard;
