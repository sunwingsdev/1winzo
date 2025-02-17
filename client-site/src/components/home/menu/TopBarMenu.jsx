import { Link, useNavigate } from "react-router";
import logo from "../../../assets/logo.png";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";
import { useContext, useState } from "react";
import SignInModal from "../../shared/modal/SignInModal";
import RegistrationModal from "../../shared/modal/RegistrationModal";
import crashImg from "../../../assets/images/offers/crash.png";
import gearImg from "../../../assets/images/offers/gear.png";
import holdAndWinImg from "../../../assets/images/offers/holdAndWin.png";
import ladyImg from "../../../assets/images/offers/lady.png";
import sportImg from "../../../assets/images/offers/sport.jpg";
import { HiMenuAlt1 } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
import { FaRegUserCircle, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMail,
  IoLogoAndroid,
} from "react-icons/io";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import ApiConnectionModal from "../../shared/ApiConnectionModal";
import DepositModal from "../../depositModal/DepositModal";
import MobileMainMenu from "./MobileMainMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

const TopBarMenu = () => {
  const { setIsModalOpen, setIsApiModalOpen, isModalOpen, isApiModalOpen } =
    useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [isLogOutDropdownOpen, setIsLogOutDropdownOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const openDepositModal = () => setIsDepositModalOpen(true);
  const closeDepositModal = () => setIsDepositModalOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleLogOutDropdown = () => {
    setIsLogOutDropdownOpen(!isLogOutDropdownOpen);
  };

  const openRegistrationModal = () => setIsRegistrationOpen(true);
  const closeRegistrationModal = () => setIsRegistrationOpen(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    flag: "https://flagcdn.com/w320/bd.png", // বাংলাদেশের পতাকা
  });

  const currencies = [
    { symbol: "BDT", label: "BDT", flag: "https://flagcdn.com/w320/bd.png" },
    { symbol: "\u20B9", label: "INR", flag: "https://flagcdn.com/w320/in.png" },
    { symbol: "FBu", label: "BIF", flag: "https://flagcdn.com/w320/bi.png" },
    { symbol: "R$", label: "BRL", flag: "https://flagcdn.com/w320/br.png" },
    { symbol: "CDF", label: "CDF", flag: "https://flagcdn.com/w320/cd.png" },
    { symbol: "GHC", label: "GHS", flag: "https://flagcdn.com/w320/gh.png" },
    {
      symbol: "\u0DBB\u0DD4",
      label: "LKR",
      flag: "https://flagcdn.com/w320/lk.png",
    },
    { symbol: "K", label: "MMK", flag: "https://flagcdn.com/w320/mm.png" },
    { symbol: "MT", label: "MZN", flag: "https://flagcdn.com/w320/mz.png" },
    {
      symbol: "\u0930\u0941.",
      label: "NPR",
      flag: "https://flagcdn.com/w320/np.png",
    },
    { symbol: "\u20B1", label: "PHP", flag: "https://flagcdn.com/w320/ph.png" },
    { symbol: "FRw", label: "RWF", flag: "https://flagcdn.com/w320/rw.png" },
    { symbol: "TSh", label: "TZS", flag: "https://flagcdn.com/w320/tz.png" },
  ];

  const offers = [
    {
      label: "Welcome Crash Bonus",
      value: "welcome_crash_bonus",
      img: crashImg,
    },
    {
      label: "Welcome Live Bonus",
      value: "welcome_live_bonus",
      img: ladyImg,
    },
    {
      label: "Welcome Slots Bonus",
      value: "welcome_slots_bonus",
      img: holdAndWinImg,
    },
    {
      label: "Sport Welcome Pack 700%",
      value: "sport_welcome_pack_700",
      img: sportImg,
    },
    {
      label: "Crash Welcome Pack 700%",
      value: "crash_welcome_pack_700",
      img: gearImg,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // side mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Successfully logged out!", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
  };

  const handleMenuSelect = () => {
    if (!user) {
      openModal();
      addToast("Please login first", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      setIsApiModalOpen(true);
    }
  };

  return (
    <div className="bg-[#18263AE6] border-b border-[#293b55]">
      <div className="hidden lg:flex justify-between items-center gap-2">
        <div className="flex items-center gap-6 xl:gap-10 2xl:gap-16">
          <div className="flex items-center gap-2 pl-5 xl:pl-3 pr-3">
            <Link to={"/"}>
              <img className="w-36 xl:w-44 m-auto" src={logo} alt="" />
            </Link>
            <Link to={"/"}>
              <img
                className="w-7 m-auto rounded-md object-cover"
                src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-4 xl:gap-6 text-white font-bold text-base overflow-x-auto scrollbar-hide">
            {topMenu.map((menu) => (
              <div onClick={handleMenuSelect} key={menu.id}>
                <p className="py-4 border-b-2 hover:text-[#1976d2] border-[#18263AE6] hover:border-[#1976d2] duration-300 whitespace-nowrap">
                  {menu.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-4 text-white pl-2 xl:pl-4 2xl:pl-6 border-l border-[#293b55] ">
            {user ? (
              <>
                <button onClick={openDepositModal}>
                  <p className="text-sm font-bold px-4 xl:px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300 whitespace-nowrap">
                    DEPOSIT
                  </p>
                </button>
                <IoIosMail className="text-5xl text-blue-500" />
                <div className="relative">
                  {/* Dropdown Trigger */}
                  <button
                    onClick={toggleLogOutDropdown}
                    className="flex items-center gap-2 px-4 py-2 bg-[#293b55] text-white font-bold rounded-md hover:bg-[#1e2a3d]"
                  >
                    <span className="flex items-center gap-1">
                      <FaRegUserCircle className="size-6" />
                      BDT 0.00
                    </span>

                    {isLogOutDropdownOpen ? (
                      <IoIosArrowUp className="w-5 h-5" />
                    ) : (
                      <IoIosArrowDown className="w-5 h-5" />
                    )}
                  </button>

                  {/* Dropdown Content */}
                  {isLogOutDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-[#1e293b] text-white rounded-lg shadow-lg">
                      <div className="flex flex-row items-center justify-between p-4 border-b border-[#293b55] bg-blue-500 mx-4 mt-4 rounded-lg">
                        <div>
                          <p className="text-sm">Balance:</p>
                          <p className="text-lg font-bold">BDT 0</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm underline">Default</span>
                          <input
                            type="radio"
                            name="account"
                            checked
                            className="accent-white"
                          />
                        </div>
                      </div>
                      <div className="p-4 flex flex-col items-center gap-2">
                        {user?.role === "admin" && (
                          <Link to="/dashboard" className="w-full">
                            <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-bold">
                              DASHBOARD
                            </button>
                          </Link>
                        )}
                        <Link to="/profile" className="w-full">
                          <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-bold">
                            MY PROFILE
                          </button>
                        </Link>
                        <Link to="/withdrawal" className="w-full">
                          <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-bold">
                            WITHDRAWAL
                          </button>
                        </Link>
                        <Link to="/payment-history" className="w-full">
                          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-bold">
                            Payment History
                          </button>
                        </Link>
                        <Link to="/rules" className="w-full">
                          <button className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm font-bold">
                            Rules
                          </button>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-bold"
                        >
                          LOGOUT
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link onClick={openModal}>
                  <p className="text-sm font-bold px-4 xl:px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300 whitespace-nowrap">
                    SIGN IN
                  </p>
                </Link>
                <Link onClick={openRegistrationModal}>
                  <p className="text-sm font-bold px-5 xl:px-6 py-2 rounded-full bg-[#F44336] hover:bg-[#cf4137] duration-300">
                    REGISTRATION
                  </p>
                </Link>
              </>
            )}
          </div>

          <div className="w-24 px-5 text-white border-l border-[#293b55]">
            <img className="rounded-full" src={flag} alt="" />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="px-4 sm:px-6 lg:hidden bg-[#18283d]">
        <div className="flex items-center justify-between py-3">
          <div className="text-white flex gap-3 sm:gap-4 items-center">
            <button onClick={toggleMenu}>
              <HiMenuAlt1 size={36} />
            </button>
            <TiMessages size={25} className="text-blue-500" />
          </div>
          <div className="flex items-center gap-2 pl-5 xl:pl-3 pr-3">
            <Link to={"/"}>
              <img className="w-28 m-auto" src={logo} alt="" />
            </Link>
            <Link to={"/"}>
              <img
                className="w-7 m-auto rounded-md object-cover"
                src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="text-white flex gap-1 items-center">
            {user ? (
              <button onClick={openDepositModal} className="mb-2">
                <div className="flex flex-row items-center gap-1 px-3 xl:px-6 py-1 rounded-full bg-red-700 hover:bg-red-600 duration-300 whitespace-nowrap">
                  <p className="text-[12px] font-extrabold">DEPOSIT</p>
                  <GoPlusCircle className="text-xl" />
                </div>
              </button>
            ) : (
              <>
                <Link>
                  <FaWhatsapp size={28} className="text-blue-500" />
                </Link>
                <Link>
                  <div className="relative flex items-center justify-center">
                    <FaTelegramPlane className="text-3xl text-blue-500" />
                    {/* <p className="absolute bg-yellow-400 text-black px-1.5 py-0.5 text-[10px] -bottom-1 rounded-sm">
                      NEW
                    </p> */}
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Side Menu */}
        <MobileMainMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          openDepositModal={openDepositModal}
        />

        <div className="flex items-center justify-start gap-2 text-sm font-bold text-white w-full">
          {user ? (
            <>
              <div className="flex flex-row items-center gap-2 whitespace-nowrap">
                {user?.role === "admin" && (
                  <Link
                    to="/dashboard"
                    className="uppercase text-slate-500 text-[10px] md:text-[12px]"
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  to="/profile"
                  className="uppercase text-slate-500 text-[10px] md:text-[12px]"
                >
                  Profile
                </Link>
                <div
                  onClick={openDepositModal}
                  className="uppercase text-slate-500 text-[10px] md:text-[12px]"
                >
                  Deposit
                </div>
                <Link
                  to="/payment-history"
                  className="uppercase text-slate-500 text-[10px] md:text-[12px]"
                >
                  payment history
                </Link>
                <Link
                  to="/bet-history"
                  className="uppercase text-slate-500 text-[10px] md:text-[12px]"
                >
                  bet history
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link onClick={openModal} className="w-1/2">
                <p className="w-full py-2 rounded-md bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300 text-center">
                  SIGN IN
                </p>
              </Link>
              <Link onClick={openRegistrationModal} className="w-1/2">
                <p className="w-full py-2 rounded-md bg-[#4caf50] hover:bg-[#388f3b] duration-300 text-center">
                  REGISTRATION
                </p>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sign In modal */}
      {isModalOpen && <SignInModal closeModal={closeModal} />}

      {/* Registration Modal */}
      {isRegistrationOpen && (
        <RegistrationModal
          closeRegistrationModal={closeRegistrationModal}
          toggleDropdown={toggleDropdown}
          selectedCountry={selectedCountry}
          isOpen={isOpen}
          currencies={currencies}
          offers={offers}
          handleSelect={handleSelect}
        />
      )}

      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )}
      {/* Deposit In modal  */}
      {isDepositModalOpen && (
        <DepositModal closeDepositModal={closeDepositModal} />
      )}
    </div>
  );
};

export default TopBarMenu;
