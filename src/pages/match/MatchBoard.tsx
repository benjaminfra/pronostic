import MatchsSelector from "@/components/match/MatchsSelector";
import MatchProvider from "@/provider/MatchProvider";

const MatchBoard = () => {
  return (
    <MatchProvider>
      <MatchsSelector />
    </MatchProvider>
  );
};
export default MatchBoard;
