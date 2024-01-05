type TeamScoreProps = {
  score: number | null;
};

const TeamScore: React.FC<TeamScoreProps> = ({ score }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-dark-moderate-blue border rounded-xl p-5">
      <span className="text-3xl font-bold">{score !== null ? score : "0"}</span>
    </div>
  );
};

export default TeamScore;
