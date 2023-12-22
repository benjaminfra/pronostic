import DivSkeleton from "@/components/skeleton/DivSkeleton";
import ImageSkeleton from "../../skeleton/ImageSkeleton";
import TeamBox from "./TeamBox";

const TeamCardSkeleton = () => {
  return (
    <TeamBox>
      <div className="flex-none">
        <ImageSkeleton width="16" height="16" />
      </div>
      <div className="flex-none w-16">
        <DivSkeleton className="h-2.5 w-full mt-2" />
      </div>
    </TeamBox>
  );
};

export default TeamCardSkeleton;
