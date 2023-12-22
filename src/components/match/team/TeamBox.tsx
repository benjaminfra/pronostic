type TeamBoxProps = {
  children: React.ReactNode;
};

const TeamBox: React.FC<TeamBoxProps> = ({ ...children }) => {
  return (
    <div>
      <div
        className="flex items-center justify-center p-2 flex-col"
        {...children}
      ></div>
    </div>
  );
};

export default TeamBox;
