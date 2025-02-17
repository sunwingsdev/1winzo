import { GiSwordman } from "react-icons/gi";
import liveGamesImg from "../../assets/menu/5.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const LiveGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Live Games" Icon={GiSwordman} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Live Games"
            img={liveGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveGames;
