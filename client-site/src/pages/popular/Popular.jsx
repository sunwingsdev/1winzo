import { GiGamepad } from "react-icons/gi";
import popularImg from "../../assets/images/icons/popular.png";
import { gamesData } from "../../components/shared/GamesData";
import PageTop from "../../components/shared/PageTop";
import TopSection from "../../components/shared/TopSection";
import PageGridSection from "../../components/shared/PageGridSection";

const Popular = () => {
  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title="Popular" Icon={GiGamepad} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection title="Popular" img={popularImg} games={gamesData} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
