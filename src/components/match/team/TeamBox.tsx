type TeamBoxProps = {
  isAway?: boolean;
  children: React.ReactNode;
};

const TeamBox: React.FC<TeamBoxProps> = ({ isAway = false, ...children }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center p-2 ${
          isAway ? "flex-row-reverse" : "flex-row"
        }`}
        {...children}
      ></div>
    </div>
  );
};

export default TeamBox;
