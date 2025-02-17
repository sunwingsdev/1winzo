import { FaFutbol } from "react-icons/fa";
import virtualGamesImg from "../../assets/menu/14.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const VirtualSport = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Virtual Sports" Icon={FaFutbol} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Virtual Sports"
            img={virtualGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualSport;
