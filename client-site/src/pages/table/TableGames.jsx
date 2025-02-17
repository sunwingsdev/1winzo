import { GiMoneyStack } from "react-icons/gi";
import tableGamesImg from "../../assets/menu/13.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const TableGames = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Table Games" Icon={GiMoneyStack} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="Table Games"
            img={tableGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default TableGames;
