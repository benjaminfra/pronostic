import { Match } from "@/types/matchs";
import TeamCard from "./TeamCard";
import InputNumber from "../input/InputNumber";

type RoundMatchProps = {
  matchs: Match[] | undefined;
  isLoading: boolean;
};

const RoundMatchs: React.FC<RoundMatchProps> = ({ matchs, isLoading }) => {
  return matchs?.map((match, key) => (
    <div key={key} className="flex my-10 items-center">
      <div className="flex-1">
        <TeamCard team={match.team_a} />
      </div>
      <div className="flex-none mx-2">
        <InputNumber />
      </div>
      <div className="flex-none mx-2">
        <InputNumber />
      </div>
      <div className="flex-1">
        <TeamCard team={match.team_b} isAway={true} />
      </div>
    </div>
  ));
};

export default RoundMatchs;
