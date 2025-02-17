import PopularCategory from "../../components/all-games/PopularCategory";
import { FaGamepad } from "react-icons/fa";
import RabetExclusive from "../../components/all-games/RabetExclusive";
import NewGames from "../../components/all-games/NewGames";
import LiveGames from "../../components/all-games/LiveGames";
import SlotsGame from "../../components/all-games/SlotsGame";
import CrashGames from "../../components/all-games/CrashGames";
import LocalGames from "../../components/all-games/LocalGames";
import RouletteGames from "../../components/all-games/RouletteGames";
import FastGames from "../../components/all-games/FastGames";
import BaccaratGames from "../../components/all-games/BaccaratGames";
import BlackJackGames from "../../components/all-games/BlackJackGames";
import TableGames from "../../components/all-games/TableGames";
import VirtualSports from "../../components/all-games/VirtualSports";
import OtherGames from "../../components/all-games/OtherGames";
import TopSection from "../../components/shared/TopSection";
import PageTop from "../../components/shared/PageTop";
import ScrollContent from "../../components/shared/ScrollContent";
import MobileSlider from "../../components/all-games/MobileSlider";

const AllGames = () => {
  return (
    <div className="bg-[#091222]">
      <PageTop title="All Games" Icon={FaGamepad} />
      <TopSection />
      <div className="md:hidden">
        <MobileSlider />
      </div>
      <div className="flex flex-col gap-4">
        <PopularCategory />
        <RabetExclusive />
        <NewGames />
        <LiveGames />
        <SlotsGame />
        <CrashGames />
        <LocalGames />
        <FastGames />
        <RouletteGames />
        <BaccaratGames />
        <BlackJackGames />
        <TableGames />
        <VirtualSports />
        <OtherGames />
      </div>
    </div>
  );
};

export default AllGames;
