import { FaTrophy } from "react-icons/fa";
import slotGamesImg from "../../assets/menu/6.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const SlotGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Slot Games" Icon={FaTrophy} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Slot Games"
            img={slotGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default SlotGames;
