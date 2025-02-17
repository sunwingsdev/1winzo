import { FaCoins } from "react-icons/fa";
import newGamesImg from "../../assets/menu/4.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const NewGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="New Games" Icon={FaCoins} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="New Games"
            img={newGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default NewGames;
