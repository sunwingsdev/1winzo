import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { leftSideMenu } from "../../MenuItems";
import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "@/providers/LanguageContext";

const LeftSitBarMenu = ({ categories }) => {
  const location = useLocation();

  return (
    <div className="pt-16 pb-8">
      <h2 className="p-6 text-sm font-bold text-white">Categories</h2>
      <div className="text-[#859cba] text-base font-semibold">
        {categories?.map((item) => {
          const isActive = location.pathname === `/${item?.name}`;
          return (
            <Link
              key={item?._id}
              to={item?.name === "all-games" ? "/" : `/${item?.name}`}
            >
              <div
                className={`flex items-center gap-1 py-1 px-4 hover:bg-[#18263AE6] border-l-4 duration-300 
                  ${
                    isActive
                      ? "bg-[#18263AE6] border-[#0077f1] text-white"
                      : "border-[#0d1827]"
                  }`}
              >
                <img
                  className="w-10"
                  src={
                    item?._id === "all-games"
                      ? item?.image // local image or imported
                      : `${import.meta.env.VITE_BASE_API_URL}${item?.image}`
                  }
                  alt={item?.name}
                />
                <p className="capitalize">
                  {item?.name === "all-games"
                    ? "All Games"
                    : `${item?.name.replace("-", " ")} Games`}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSitBarMenu;
