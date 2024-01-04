import { Match } from "@/types/matchs";
import MatchCard from "./MatchCard";

type RoundMatchProps = {
  matchs: Match[] | undefined;
};

const RoundMatchs: React.FC<RoundMatchProps> = ({ matchs }) => {
  const matchsDiv = matchs?.map((match, key) => (
    <div key={key} className="my-10">
      <MatchCard match={match} />
    </div>
  ));

  return <div>{matchsDiv}</div>;
};

export default RoundMatchs;
