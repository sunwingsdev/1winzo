import logo from "../../../assets/logo.png";
import { FaCaretDown, FaPlus, FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoHome, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import MegaMenu from "../../MegaMenu/MegaMenu";
import { useDispatch, useSelector } from "react-redux";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useToasts } from "react-toast-notifications";
import { Link, NavLink, useNavigate } from "react-router";
import { TbReload } from "react-icons/tb";
import MobileMainMenu from "./MobileMainMenu";

const SampleMenu = () => {
  const [isRotating, setIsRotating] = useState(false);
  const user = { username: "Sample User" }; // Demo user
  const token = false; // Demo token to show logged-in state

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  // MegaMenu data arrays...
  const megaMenuCricket = [
    {
      route: "/cricket",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/cricket/betswiz_new.png",
    },
    {
      route: "/cricket",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/cricket/sap_new.png",
    },
  ];

  const megaMenuCasino = [
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/evo_new.png",
    },
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/pp_new.png",
    },
    {
      route: "/casino",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/ld/sexy_v2_new.png",
    },
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/royal_new.png",
    },
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/ezugi_new.png",
    },
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/pt_new.png",
    },
    {
      route: "/casino",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/ld/aura_new.png",
    },
  ];

  const megaMenuSlot = [
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/jili_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/pp_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/haba_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/pg_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/spg_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/pt_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/rt_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/png_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/smart_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/jdb_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/one_new.png",
    },
    {
      route: "/slot",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/rng/netent_new.png",
    },
    {
      route: "/slot",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/rng/nolimit_new.png",
    },
    {
      route: "/slot",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/rng/relax_new.png",
    },
    {
      route: "/slot",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/rng/booongo_new.png",
    },
  ];

  const megaMenuTable = [
    {
      route: "/table-games",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/table/jili_new.png",
    },
    {
      route: "/table-games",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/table/sexy_v2_new.png",
    },
    {
      route: "/table-games",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/table/spg_new.png",
    },
  ];

  const megaMenuSportBook = [
    {
      route: "/sports-book",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/sb/ibc_new.png",
    },
  ];

  const megaMenuFishing = [
    {
      route: "/fishing",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/fishing/jili_new.png",
    },
    {
      route: "/fishing",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/fishing/spg_new.png",
    },
  ];

  const megaMenuCrash = [
    {
      route: "/crash",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/crash/aviatrix_new.png",
    },
    {
      route: "/crash",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/crash/jili_new.png",
    },
    {
      route: "/crash",
      image: "https://jiliwin.9terawolf.com/images/babu/menu/crash/pp_new.png",
    },
    {
      route: "/crash",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/crash/spribe_new.png",
    },
    {
      route: "/crash",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/crash/smart_new.png",
    },
    {
      route: "/crash",
      image:
        "https://jiliwin.9terawolf.com/images/babu/menu/crash/bslt_new.png",
    },
  ];

  // State for drawer & hover
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCasinoHovered, setIsCasinoHovered] = useState(false);
  const [isSlotHovered, setIsSlotHovered] = useState(false);
  const [isTableHovered, setIsTableHovered] = useState(false);
  const [isSportHovered, setIsSportHovered] = useState(false);
  const [isFishingHovered, setIsFishingHovered] = useState(false);
  const [isCrashHovered, setIsCrashHovered] = useState(false);

  const handleLogout = () => {
    // dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };

  const handleReloadClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* ------------------------------------------------------------------
    TOP NAV BAR (Black background, as per your screenshot design)
  ------------------------------------------------------------------ */
  return (
    <div className="z-20">
      {/* TOP NAV BAR */}
      <div className="bg-[#18263AE6] md:bg-black w-full px-4 py-2 flex items-center justify-between text-white">
        {/* Left side: Hamburger (mobile only) and Logo + Flag */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="md:hidden mr-3">
            <IoMenuOutline size={28} />
          </button>
          <div className="flex items-center gap-2 pl-5 xl:pl-3 pr-3">
            <div className="flex items-center gap-4">
              <Link to={"/"}>
                <img className="w-36 xl:w-44 m-auto" src={logo} alt="Logo" />
              </Link>
              {/* <div className="hidden sm:flex gap-2">
                <button className="text-sm font-medium">প্রবেশ করুন</button>
                <button className="text-sm font-medium bg-blue-500 text-white px-3 py-1 rounded">
                  নিবন্ধন
                </button>
              </div> */}
            </div>

            <Link to={"/"}>
              <img
                className="w-7 m-auto rounded-md object-cover"
                src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                alt="Flag"
              />
            </Link>
          </div>
        </div>

        {/* Right side (for md+ screens) */}
        <div className="hidden md:flex items-center space-x-4">
          {!token ? (
            // When no user is logged in: show SIGN IN and REGISTRATION buttons.
            <>
              <button className="bg-[#FFCD03] hover:bg-[#e5be22] px-3 py-1 rounded text-sm sm:text-base">
                প্রবেশ করুন
              </button>
              <button className="bg-[#0083FB] hover:bg-[#2f9bff] px-3 py-1 rounded text-sm sm:text-base text-white">
                নিবন্ধন
              </button>
            </>
          ) : (
            // When user is logged in: show dashboard items.
            <>
              <span className="text-sm sm:text-base font-semibold">
                প্রধান ওয়ালেট
              </span>
              <span className="text-sm sm:text-base text-teal-400">৳ *.**</span>
              <button onClick={handleReloadClick} className="p-2 bg-black">
                <TbReload
                  size={24}
                  className={`transition-transform duration-500 ${
                    isRotating ? "rotate-180" : ""
                  }`}
                />
              </button>
              <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-sm sm:text-base">
                আমানত
              </button>
              <button className="px-3 py-1 rounded text-sm sm:text-base text-white border border-black hover:border-gray-400">
                প্রোফাইল
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded text-sm sm:text-base text-white border border-black hover:border-gray-400"
              >
                প্রস্থান
              </button>
              <button className="flex items-center space-x-1 bg-black px-2 py-1 border border-black hover:border-gray-400 rounded">
                <img
                  src="https://www.babu88h.com/static/image/country/BDT.svg"
                  alt="bd flag"
                  className="w-6"
                />
                <span className="text-sm sm:text-base font-semibold">
                  ৳ BDT (বাংলা)
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* MOBILE MENU (using MobileMainMenu component from TopBarMenu) */}
      <div className="lg:hidden">
        <MobileMainMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          // Pass additional props as needed; for example, if you need deposit modal or similar:
          // openDepositModal={openDepositModal}
        />
      </div>

      {/* BOTTOM NAVIGATION (for md+ screens) */}
      <div className="bg-[#18263AE6] md:flex hidden relative">
        <div className="container mx-auto px-4">
          <ul className="flex whitespace-nowrap overflow-x-auto">
            {/* Home */}
            <NavLink
              to={"/"}
              className="text-sm font-semibold flex items-center gap-1 justify-center py-3 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
            >
              <p className="py-1 px-5 border-r-[1px]">
                <IoHome size={20} />
              </p>
            </NavLink>

            {/* Cricket menu */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <NavLink
                to={"/cricket"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>ক্রিকেট</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuCricket} />
              </div>
            </div>

            {/* Casino menu */}
            <div
              onMouseEnter={() => setIsCasinoHovered(true)}
              onMouseLeave={() => setIsCasinoHovered(false)}
            >
              <NavLink
                to={"/casino"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>ক্যাসিনো</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isCasinoHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuCasino} />
              </div>
            </div>

            {/* Slot menu */}
            <div
              onMouseEnter={() => setIsSlotHovered(true)}
              onMouseLeave={() => setIsSlotHovered(false)}
            >
              <NavLink
                to={"/slot"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>স্লট গেম</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isSlotHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuSlot} />
              </div>
            </div>

            {/* Table Games menu */}
            <div
              onMouseEnter={() => setIsTableHovered(true)}
              onMouseLeave={() => setIsTableHovered(false)}
            >
              <NavLink
                to={"/table-games"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>টেবিল গেম</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isTableHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuTable} />
              </div>
            </div>

            {/* Sports Book menu */}
            <div
              onMouseEnter={() => setIsSportHovered(true)}
              onMouseLeave={() => setIsSportHovered(false)}
            >
              <NavLink
                to={"/sports-book"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>খেলার বই</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isSportHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuSportBook} />
              </div>
            </div>

            {/* Fishing menu */}
            <div
              onMouseEnter={() => setIsFishingHovered(true)}
              onMouseLeave={() => setIsFishingHovered(false)}
            >
              <NavLink
                to={"/fishing"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>মাছ ধরা</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isFishingHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuFishing} />
              </div>
            </div>

            {/* Crash menu */}
            <div
              onMouseEnter={() => setIsCrashHovered(true)}
              onMouseLeave={() => setIsCrashHovered(false)}
            >
              <NavLink
                to={"/crash"}
                className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
              >
                <p>ক্র্যাশ</p>
              </NavLink>
              <div
                className={`absolute left-0 top-full w-full bg-[#313131] z-20 text-black p-5 transform transition-transform duration-300 ease-in-out ${
                  isCrashHovered
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0 pointer-events-none"
                }`}
              >
                <MegaMenu items={megaMenuCrash} />
              </div>
            </div>

            {/* Promotion */}
            <NavLink
              to={"/promotion"}
              className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
            >
              <p>প্রমোশন</p>
            </NavLink>

            {/* Betting Pass */}
            <NavLink
              to={"/betting-pass"}
              className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
            >
              <p>বেটিং পাস</p>
            </NavLink>

            {/* Referral */}
            <NavLink
              to={"/referral"}
              className="text-sm font-semibold flex items-center gap-1 justify-center px-5 py-4 text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-colors duration-200 ease-linear"
            >
              <p>সুপারিশ</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleMenu;
