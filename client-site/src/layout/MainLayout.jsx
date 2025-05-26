import { Outlet, useLocation } from "react-router";
import TopBarMenu from "../components/home/menu/TopBarMenu";
import LeftSitBarMenu from "../components/home/menu/LeftSitBarMenu";
import RightSitBarMenu from "../components/home/menu/RightSitBarMenu";
import Footer from "../components/shared/Footer";
import MobileMenu from "../components/home/menu/MobileMenu";
import AppDownload from "@/components/shared/AppDownload";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext, useState } from "react";
import ApiConnectionModal from "@/components/shared/ApiConnectionModal";
import LRVModal from "@/components/shared/modal/LRVModal";
import { AuthContext } from "@/providers/AuthProvider";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import allGameImg from "../assets/menu/1.png";
import DepositWithdrawModal from "@/components/depositModal/DepositWithdrawModal";
import { useGetAllSupportQuery } from "@/redux/features/allApis/customerSupportApi/customerSupportApi";
import { FaHeadset } from "react-icons/fa";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("User in MainLayout:", user);
  const {
    setIsApiModalOpen,
    isLRVModalOpen,
    setIsModalOpen,
    isApiModalOpen,
    setIsLRVModalOpen,
    isModalDWOpen,
    setIsModalDWOpen,
  } = useContext(AuthContext);
  const location = useLocation();
  const isSpecialRoute =
    location.pathname === "/profile" ||
    location.pathname === "/payment-history" ||
    location.pathname === "/rules";
  const [isStickerOpen, setIsStickerOpen] = useState(true);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const { data: supportContacts } = useGetAllSupportQuery();

  const { data: allCategories } = useGetAllCategoriesQuery();

  const allGameItem = {
    _id: "all-games",
    name: "all-games",
    image: allGameImg,
  };

  const combinedCategories = [allGameItem, ...(allCategories || [])];

  return (
    <div className="bg-[#152234] relative">
      {/* Top Navigation */}
      <header className="fixed top-0 z-[1000] w-full">
        <div className="md:hidden">
          <AppDownload />
        </div>
        <TopBarMenu />
      </header>

      {/* Left Sidebar */}
      {!isSpecialRoute && (
        <aside className="fixed left-0 z-[998] lg:block hidden w-[20%] h-screen overflow-y-auto bg-[#0d1827] border-r border-[#293b55]">
          <LeftSitBarMenu categories={combinedCategories} />
        </aside>
      )}

      {/* Right Sidebar */}
      <aside className="fixed right-0 z-[999] lg:block hidden w-[7%] xl:w-[5%] h-screen overflow-y-auto bg-[#182539] border-l border-[#293b55]">
        <RightSitBarMenu />
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 ${
          !isSpecialRoute ? "lg:ps-[20%] lg:pe-[7%] xl:pe-[5%]" : ""
        }`}
      >
        <Outlet />
        <Footer />
      </main>

      {/* Mobile Menu */}
      <MobileMenu />
      {/* Sticker */}
      {isStickerOpen && (
        <div className="fixed bottom-6 left-2 z-50 md:bottom-3 md:left-8">
          <div className="flex justify-end">
            <button
              onClick={() => setIsStickerOpen(false)}
              className="text-white text-xl md:text-2xl"
            >
              <IoIosCloseCircle />
            </button>
          </div>
          <img
            className="w-36 md:w-40"
            src="https://img.d4040p.com/upload/footerH5FloatBanner/image_202063.gif"
            alt=""
          />
        </div>
      )}

      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )}
      {isLRVModalOpen && (
        <LRVModal closeLRVModal={() => setIsLRVModalOpen(false)} />
      )}
      {isModalDWOpen && (
        <DepositWithdrawModal closeDWModal={() => setIsModalDWOpen(false)} />
      )}

      {/* Customer Support Floating Button + Popup */}
      {user && (
        <div className="fixed bottom-20 md:bottom-6 right-7 md:right-28 flex flex-col items-end z-[1050]">
          {/* Popup */}
          <div className={`support-popup ${isSupportOpen ? "open" : ""}`}>
            <h4 className="text-lg font-semibold mb-2">Customer Support</h4>
            <ul>
              {supportContacts?.map((item) => (
                <li key={item?._id} className="flex items-center gap-3 mb-2">
                  <img
                    src={`${import.meta.env.VITE_BASE_API_URL}${item.image}`}
                    alt={item.type}
                    className="w-6 h-6"
                  />
                  <div>
                    <div className="font-semibold capitalize">{item.type}</div>
                    <div className="text-sm text-gray-300">{item.number}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Icon Button */}
          <button
            onClick={() => setIsSupportOpen((prev) => !prev)}
            className="bg-blue-600 hover:bg-[#0b1a34] transition-colors p-3 rounded-full shadow-lg flex items-center justify-center text-white text-5xl"
            aria-label="Toggle Customer Support"
          >
            <FaHeadset />
          </button>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
