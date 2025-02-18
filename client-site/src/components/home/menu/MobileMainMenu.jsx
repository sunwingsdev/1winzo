import React, { useContext, useEffect } from "react";
import { BiBookBookmark } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { CgLivePhoto } from "react-icons/cg";
import { FaApple, FaAvianex, FaUserTag } from "react-icons/fa";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiDonut, GiRocketThruster } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { IoIosFootball, IoLogoAndroid } from "react-icons/io";
import { LiaProceduresSolid } from "react-icons/lia";
import { LuMonitorStop, LuTableColumnsSplit } from "react-icons/lu";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { MdLanguage } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import ApiConnectionModal from "../../shared/ApiConnectionModal";
import logo from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const MobileMainMenu = ({ isMenuOpen, toggleMenu, openDepositModal }) => {
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const { setIsApiModalOpen, setIsModalOpen, isApiModalOpen } =
    useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const { addToast } = useToasts();

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const menuItems = [
    {
      name: "Main",
      icon: BsGridFill,
      link: "/",
    },
    {
      name: "LIVE",
      icon: LuMonitorStop,
      action: "handleMenuSelect",
    },
    {
      name: "SPORTS",
      icon: LuTableColumnsSplit,
      action: "handleMenuSelect",
    },
    {
      name: "Cricket",
      icon: FaBaseballBatBall,
      action: "handleMenuSelect",
    },
    {
      name: "Casino",
      icon: PiNumberCircleSevenFill,
      action: "handleMenuSelect",
    },
    {
      name: "Live Dealers",
      icon: CgLivePhoto,
      action: "handleMenuSelect",
    },
    {
      name: "TV Games",
      icon: LuMonitorStop,
      action: "handleMenuSelect",
    },
    {
      name: "Aviator",
      icon: GiRocketThruster,
      action: "handleMenuSelect",
    },
    {
      name: "JetX",
      icon: LiaProceduresSolid,
      action: "handleMenuSelect",
    },
    {
      name: "AviatriX",
      icon: FaAvianex,
      action: "handleMenuSelect",
    },
    {
      name: "eSport",
      icon: IoIosFootball,
      action: "handleMenuSelect",
    },
    {
      name: "Bonuses",
      icon: GiDonut,
      action: "handleMenuSelect",
    },
    {
      name: "Rules",
      icon: FaUserTag,
      action: "handleMenuSelect",
    },
    {
      name: "Tutorials",
      icon: BiBookBookmark,
      action: "handleMenuSelect",
    },
    {
      name: "ভাষা",
      icon: MdLanguage,
      action: "handleMenuSelect",
    },
    {
      name: "সরাসরি কথোপকথন",
      icon: RiCustomerServiceFill,
      action: "handleMenuSelect",
    },
    {
      name: "প্রস্থান",
      icon: GrLogout,
      action: "handleMenuSelect",
    },
  ];

  useEffect(() => {
    // Prevent body scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuSelect = () => {
    if (!user) {
      setIsModalOpen(true);
      addToast("Please login first", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      setIsApiModalOpen(true);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-[70%] sm:w-1/2 z-50 bg-[#152133] py-6 transform overflow-y-auto ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="w-full flex items-center justify-center gap-1">
        <Link to={"/"}>
          <img
            className="w-28"
            src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
            alt=""
          />
        </Link>
        <Link to={"/"}>
          <img
            className="w-7 m-auto rounded-md object-cover"
            src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
            alt=""
          />
        </Link>
      </div>
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className="text-white absolute top-3 right-3"
      >
        <HiX size={28} />
      </button>

      {/* Deposit Button */}
      <div className="px-5">
        <button
          onClick={openDepositModal}
          className="mt-6 w-full py-2 rounded-md text-sm font-bold text-white bg-blue-500"
        >
          DEPOSIT
        </button>
      </div>

      {/* Application Section */}
      <p className="flex justify-between gap-5 text-xs font-bold items-center text-white bg-[#18263a] mt-3 py-3 px-5">
        OUR APPLICATION
        <div className="flex gap-3 items-center text-blue-500">
          <FaApple className="text-3xl" />
          <div className="relative flex items-center justify-center">
            <IoLogoAndroid className="text-3xl" />
            <p className="absolute bg-yellow-400 text-black px-1.5 py-0.5 text-[10px] -bottom-1 rounded-sm">
              NEW
            </p>
          </div>
        </div>
      </p>

      {user && (
        <div className=" py-4 px-2 mx-2 bg-gradient-to-l from-blue-300 to-blue-600 flex flex-row items-center justify-between rounded-md">
          <div className="flex flex-row items-center gap-2">
            <img
              src="https://ifrd.4rabetsite25.com/img/main/top-sections/cup.svg"
              alt=""
            />
            <p className="text-white text-lg font-semibold">Rewards</p>
          </div>
          <div className="px-3 py-2 bg-yellow-300 rounded-md">
            <p className="text-black font-bold">Open</p>
          </div>
        </div>
      )}

      {/* Menu List */}
      <div className="flex flex-col gap-5">
        <ul className="font-bold text-white">
          {menuItems?.slice(0, 5)?.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>
                  <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                    <item.icon className="text-blue-500" size={20} />
                    {item.name}
                  </p>
                </Link>
              ) : (
                <div onClick={handleMenuSelect}>
                  <p
                    className={`flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a] ${
                      item.name === "Aviator" ? "text-red-600" : ""
                    }`}
                  >
                    <item.icon className="text-blue-500" size={20} />
                    {item.name}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-3 gap-4 text-white">
          {menuItems?.slice(5, 14)?.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>
                  <p className="flex flex-col gap-5 items-center text-center hover:bg-[#18263a] py-2 px-5 border border-[#18263a] rounded">
                    <item.icon className="text-blue-500" size={33} />
                    {item.name}
                  </p>
                </Link>
              ) : (
                <div onClick={handleMenuSelect}>
                  <p
                    className={`flex flex-col gap-5 items-center text-center hover:bg-[#18263a] py-2 px-5 border border-[#18263a] rounded ${
                      item.name === "Aviator" ? "text-red-600" : ""
                    }`}
                  >
                    <item.icon
                      className={`${
                        item.name === "Aviator"
                          ? "text-red-600"
                          : "text-blue-500"
                      }`}
                      size={33}
                    />
                    {item.name}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <ul className="font-bold text-white">
          {menuItems?.slice(14)?.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <Link to={item.link}>
                  <p className="flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a]">
                    <item.icon className="text-blue-500" size={20} />
                    {item.name}
                  </p>
                </Link>
              ) : (
                <div onClick={handleMenuSelect}>
                  <p
                    className={`flex gap-5 items-center hover:bg-[#18263a] py-2 px-5 border-b border-[#18263a] ${
                      item.name === "Aviator" ? "text-red-600" : ""
                    }`}
                  >
                    <item.icon className="text-blue-500" size={20} />
                    {item.name}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )}
    </div>
  );
};

export default MobileMainMenu;
