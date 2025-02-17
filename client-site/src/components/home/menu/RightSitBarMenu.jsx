import { Link } from "react-router";
import rightMenu from "../../../assets/menu/r-1.svg";
import { rightSideMenu } from "../../MenuItems";

const RightSitBarMenu = () => {
  return (
    <div className="pt-20 text-[#859cba] text-sm font-semibold">
      {rightSideMenu?.map((item) => (
        <Link key={item?.id} to={item?.link}>
          <div className="group mb-4">
            <img className="w-8 m-auto" src={rightMenu} alt="" />
            <p className="text-center mt-1">{item?.label}</p>
            <div className="pt-2 h-1 w-6 m-auto border-b-2 border-[#182539] group-hover:border-white  duration-300"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RightSitBarMenu;
