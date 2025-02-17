import { GiSwordAltar } from "react-icons/gi";
import otherGamesImg from "../../assets/menu/15.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const OtherGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Other Games" Icon={GiSwordAltar} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Other Games"
            img={otherGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherGames;
