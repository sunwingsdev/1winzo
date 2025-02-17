import { GiCash } from "react-icons/gi";
import baccaratGamesImg from "../../assets/menu/11.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";
const BaccaratGames = () => {
  return (
    <div className="bg-[#091222] pt-10 sm:pt-14 mt-[51px] lg:mt-0">
      <PageTop title="Baccarat" Icon={GiCash} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Baccarat"
            img={baccaratGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default BaccaratGames;
