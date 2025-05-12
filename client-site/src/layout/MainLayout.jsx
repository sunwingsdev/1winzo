import { Outlet, useLocation } from "react-router";
import TopBarMenu from "../components/home/menu/TopBarMenu";
import LeftSitBarMenu from "../components/home/menu/LeftSitBarMenu";
import RightSitBarMenu from "../components/home/menu/RightSitBarMenu";
import Footer from "../components/shared/Footer";
import MobileMenu from "../components/home/menu/MobileMenu";
import AppDownload from "@/components/shared/AppDownload";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const MainLayout = () => {
  const location = useLocation();
  const isSpecialRoute =
    location.pathname === "/profile" ||
    location.pathname === "/payment-history" ||
    location.pathname === "/rules";
  const [isStickerOpen, setIsStickerOpen] = useState(true);
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
          <LeftSitBarMenu />
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
    </div>
  );
};

export default MainLayout;
