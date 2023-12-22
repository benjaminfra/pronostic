import { Match } from "@/types/matchs";
import MatchCard from "./MatchCard";
import MatchCardSkeleton from "./MatchCardSkeleton";
import { MATCHS_BY_ROUND } from "@/constants/constants";

type RoundMatchProps = {
  matchs: Match[] | undefined;
  isLoading: boolean;
};

const RoundMatchs: React.FC<RoundMatchProps> = ({ matchs, isLoading }) => {
  const onLoadingDiv = MATCHS_BY_ROUND.map((_, key) => (
    <div key={key} className="my-10">
      <MatchCardSkeleton />
    </div>
  ));

  const matchsDiv = matchs?.map((match, key) => (
    <div key={key} className="my-10">
      <MatchCard match={match} isLoading={isLoading} />
    </div>
  ));

  return isLoading ? onLoadingDiv : <div>{matchsDiv}</div>;
};

export default RoundMatchs;
