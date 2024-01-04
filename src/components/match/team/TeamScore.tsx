type TeamScoreProps = {
  score: number | null;
};

const TeamScore: React.FC<TeamScoreProps> = ({ score }) => {
  return (
    <div className="flex items-center justify-center p-2 flex-col">
      <span className="text-3xl font-bold">{score !== null ? score : "0"}</span>
    </div>
  );
};

export default TeamScore;
