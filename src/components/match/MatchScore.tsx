import { MatchStatus } from "@/types/matchs";
import TeamScore from "./team/TeamScore";
import InputNumber from "../input/InputNumber";

type MatchScore = {
  matchStatus: MatchStatus;
  teamAGoal: number | null;
  teamBGoal: number | null;
};

const MatchScore: React.FC<MatchScore> = ({
  matchStatus,
  teamAGoal,
  teamBGoal,
}) => {
  const notPredictable =
    matchStatus === MatchStatus.FINISHED ||
    matchStatus === MatchStatus.IN_PLAYED;
  return (
    <>
      <div className="flex-none mx-2">
        {notPredictable ? (
          <TeamScore score={teamAGoal} />
        ) : (
          <InputNumber className="w-16 h-16 text-center" min={0} />
        )}
      </div>
      <div className="flex-none mx-2">
        {notPredictable ? (
          <TeamScore score={teamBGoal} />
        ) : (
          <InputNumber className="w-16 h-16 text-center" min={0} />
        )}
      </div>
    </>
  );
};

export default MatchScore;
