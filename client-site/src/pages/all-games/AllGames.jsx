import PopularCategory from "../../components/all-games/PopularCategory";
import { FaGamepad } from "react-icons/fa";
import TopSection from "../../components/shared/TopSection";
import PageTop from "../../components/shared/PageTop";
import MobileSlider from "@/components/all-games/MobileSlider";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import CategorizedGame from "@/components/all-games/CategorizedGame";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";

const AllGames = () => {
  const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const { data: allCategories } = useGetAllCategoriesQuery();
  const getGamesByCategory = (categoryName) => {
    return allHomeGames?.filter(
      (game) => game?.category?.toLowerCase() === categoryName?.toLowerCase()
    );
  };

  return (
    <div className="bg-[#091222]">
      <PageTop title="All Games" Icon={FaGamepad} />
      <TopSection />
      <div className="md:hidden">
        <MobileSlider />
      </div>
      <div className="flex flex-col gap-4">
        {/* Popular Category can be treated separately if needed */}
        <PopularCategory games={getGamesByCategory("popular")} />

        {allCategories?.map((category) => {
          // Skip "popular" since it's handled above
          if (category.name.toLowerCase() === "popular") return null;

          const games = getGamesByCategory(category.name);

          // Skip empty categories
          if (!games || games.length === 0) return null;

          return (
            <CategorizedGame
              key={category._id}
              title={category.name}
              photo={category.image}
              games={games}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllGames;
