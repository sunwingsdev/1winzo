import { Link } from "react-router";

const MobileBottomMenuTop = ({ img, title, link }) => {
  return (
    <Link
      to={link}
      className=" text-center text-xs font-bold text-white px-3 rounded-md duration-300 flex flex-col items-center justify-center hover:bg-[#152436]"
    >
      <img className="w-8" src={img} alt="" />
      <p className="mt-1 whitespace-nowrap">{title}</p>
    </Link>
  );
};

export default MobileBottomMenuTop;
