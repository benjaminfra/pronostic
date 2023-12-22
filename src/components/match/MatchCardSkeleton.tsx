import DivSkeleton from "../skeleton/DivSkeleton";
import TeamCardSkeleton from "./team/TeamCardSkeleton";

const MatchCardSkeleton = () => {
  return (
    <div role="status" className="animate-pulse flex items-center">
      <div className="flex-1">
        <TeamCardSkeleton />
      </div>
      <div className="flex-none w-16 h-16 mr-1">
        <DivSkeleton className="h-full w-full mt-2" rounded="md" />
      </div>
      <div className="flex-none w-16 h-16 ml-1">
        <DivSkeleton className="h-full w-full mt-2" rounded="md" />
      </div>
      <div className="flex-1">
        <TeamCardSkeleton />
      </div>
    </div>
  );
};

export default MatchCardSkeleton;
