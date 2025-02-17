import { FaBolt } from "react-icons/fa6";
import fastGamesImg from "../../assets/menu/9.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const FastGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Fast Games" Icon={FaBolt} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Fast Games"
            img={fastGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default FastGames;
