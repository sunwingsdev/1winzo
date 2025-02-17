import { GiDiceSixFacesSix } from "react-icons/gi";
import localGamesImg from "../../assets/menu/8.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";
const LocalGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Local Games" Icon={GiDiceSixFacesSix} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Local Games"
            img={localGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalGames;
