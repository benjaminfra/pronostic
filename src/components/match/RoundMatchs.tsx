import { Match } from "@/types/matchs";

type RoundMatchProps = {
  matchs: Match[] | undefined;
  isLoading: boolean;
};

const RoundMatchs: React.FC<RoundMatchProps> = ({ matchs, isLoading }) => {
  console.log(matchs);
  return matchs?.map((match, key) => (
    <div key={key}>
      {match.team_a} - {match.team_b}
    </div>
  ));
};

export default RoundMatchs;
