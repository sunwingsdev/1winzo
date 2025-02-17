import { GiGamepad } from "react-icons/gi";
import rabetImg from "../../assets/menu/3.png";
import { gamesData } from "../../components/shared/GamesData";
import TopSection from "../../components/shared/TopSection";
import PageTop from "../../components/shared/PageTop";
import PageGridSection from "../../components/shared/PageGridSection";

const RabetExclusive = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="BETRUSS Exclusive" Icon={GiGamepad} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title="BETRUSS Exclusives"
            img={rabetImg}
            games={gamesData}
          />
        </div>
      </div>
    </div>
  );
};

export default RabetExclusive;
