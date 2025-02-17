import { leftSideMenu } from "../../MenuItems";
import { Link, useLocation } from "react-router";

const LeftSitBarMenu = () => {
  const location = useLocation();

  return (
    <div className="pt-16 pb-8">
      <h2 className="p-6 text-sm font-bold text-white">Categories</h2>
      <div className="text-[#859cba] text-base font-semibold">
        {leftSideMenu?.map((item) => {
          const isActive = location.pathname === item?.link;
          return (
            <Link key={item?.id} to={item?.link}>
              <div
                className={`flex items-center gap-1 py-1 px-4 hover:bg-[#18263AE6] border-l-4 duration-300 
                  ${
                    isActive
                      ? "bg-[#18263AE6] border-[#0077f1] text-white"
                      : "border-[#0d1827]"
                  }`}
              >
                <img className="w-10" src={item?.Icon} alt={item?.label} />
                <p>{item?.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSitBarMenu;
