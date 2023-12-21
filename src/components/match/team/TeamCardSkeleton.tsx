import DivSkeleton from "@/components/skeleton/DivSkeleton";
import ImageSkeleton from "../../skeleton/ImageSkeleton";
import TeamBox from "./TeamBox";

type TeamCardSkeletonProps = {
  isAway?: boolean;
};

const TeamCardSkeleton: React.FC<TeamCardSkeletonProps> = ({
  isAway = false,
}) => {
  return (
    <TeamBox isAway={isAway}>
      <div className="flex-none">
        <ImageSkeleton width="14" height="14" />
      </div>
      <div className="flex-none">
        <DivSkeleton className="h-2.5 w-1/3" />
      </div>
    </TeamBox>
  );
};

export default TeamCardSkeleton;
