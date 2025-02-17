import { Link } from "react-router";

const MobileBannerBottom = ({ img, title, link }) => {
  return (
    <div>
      <Link to={link}>
        <div className="flex items-center gap-1 w-full text-sm font-bold text-white py-1 pl-4 pr-10 rounded-full border border-[#FFFFFF0A] hover:border-[#FFFFFF26] bg-[#FFFFFF0A] hover:bg-[#60748D33] duration-300">
          <p className="whitespace-nowrap">{title}</p>
          <img className="w-8" src={img} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MobileBannerBottom;
