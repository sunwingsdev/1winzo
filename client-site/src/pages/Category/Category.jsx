import { GiGamepad } from "react-icons/gi";
import PageGridSection from "@/components/shared/PageGridSection";
import PageTop from "@/components/shared/PageTop";
import TopSection from "@/components/shared/TopSection";
import { useParams } from "react-router";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";

const Category = () => {
  const { category } = useParams();

  const { data: allCategories } = useGetAllCategoriesQuery();

  const matchedCategory = allCategories?.find(
    (cat) => cat.name.toLowerCase() === category?.toLowerCase()
  );

  const { data: allHomeGames } = useGetAllHomeGamesQuery();

  const filteredGames = allHomeGames?.filter(
    (homeGame) => homeGame.category === category
  );

  return (
    <div className="bg-[#091222] pt-10 mt-[51px] lg:mt-0">
      <PageTop title={matchedCategory?.name} Icon={GiGamepad} />
      <div className="p-4">
        <TopSection />

        <div>
          <PageGridSection
            title={matchedCategory?.name}
            img={matchedCategory?.image}
            games={filteredGames}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
