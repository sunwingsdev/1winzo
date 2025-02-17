import { GiBullseye } from "react-icons/gi";
import rouletteGamesImg from "../../assets/menu/10.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const RouletteGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Roulette" Icon={GiBullseye} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Roulette"
            img={rouletteGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default RouletteGames;
