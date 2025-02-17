import { FaRocket } from "react-icons/fa";
import crashGamesImg from "../../assets/menu/7.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const CrashGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Crash Games" Icon={FaRocket} />
      <div className="p-4">
        <TopSection />
        <div>
          <PageGridSection
            title="Crash Games"
            img={crashGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default CrashGames;
