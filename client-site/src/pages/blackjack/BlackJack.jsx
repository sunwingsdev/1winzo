import { FaMoneyBillWave } from "react-icons/fa";
import blackjackGamesImg from "../../assets/menu/12.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const BlackJack = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="BlackJack" Icon={FaMoneyBillWave} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="BlackJack"
            img={blackjackGamesImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default BlackJack;
