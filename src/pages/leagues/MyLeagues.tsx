import MyLeaguesBoard from "@/components/leagues/MyLeaguesBoard";
import LeagueProvider from "@/provider/LeagueProvider";

const MyLeagues = () => {
  return (
    <LeagueProvider>
      <MyLeaguesBoard />
    </LeagueProvider>
  );
};

export default MyLeagues;
