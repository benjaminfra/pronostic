import DivSkeleton from "../skeleton/DivSkeleton";
import TeamCardSkeleton from "./team/TeamCardSkeleton";

const MatchCardSkeleton = () => {
  return (
    <div role="status" className="animate-pulse flex items-center">
      <div className="flex-1">
        <TeamCardSkeleton />
      </div>
      <div className="flex-none mx-2">
        <DivSkeleton className="w-18 h-full" />
      </div>
      <div className="flex-none mx-2">
        <DivSkeleton className="w-18 h-full" />
      </div>
      <div className="flex-1">
        <TeamCardSkeleton isAway={true} />
      </div>
    </div>
  );
};

export default MatchCardSkeleton;
