import { useState } from "react";
import DashboardSidebar from "../components/dashboard/dashboardSidebar/DashboardSidebar";
import DashboardMobilMenu from "../components/dashboard/dashboardSidebar/DashboardMobilMenu";
import { Outlet } from "react-router";
import { FaAffiliatetheme } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiCashRegister } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { BsPiggyBank, BsShop, BsBank, BsFront } from "react-icons/bs";
import {
  IoLogoWechat,
  IoSettingsSharp,
  IoGameController,
} from "react-icons/io5";
import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
import { SlGameController } from "react-icons/sl";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <IoMdHome />, path: "/dashboard" },
    {
      name: "Users",
      icon: <FaUsers />,
      path: "/dashboard/alluser",
    },
    {
      name: "Cash Agent",
      icon: <PiCashRegister />,
      path: "/dashboard/agenttree",
    },
    {
      name: "Affiliators",
      icon: <FaAffiliatetheme />,
      path: "/dashboard/affilitors",
    },
    {
      name: "Games Control",
      icon: <IoGameController />,
      submenu: [
        { name: "Categories", path: "/dashboard/gamecategories" },
        { name: "Active Games", path: "/dashboard/active-games" },
        { name: "Inactive Games", path: "/dashboard/inactive-games" },
      ],
    },
    {
      name: "Games Api key",
      icon: <GiGamepadCross />,
      submenu: [
        { name: "Sprots Live TV", path: "/dashboard/gamesapi" },
        { name: "BetFair API", path: "/dashboard/gamesapi" },
        {
          name: "Sports Radar API",
          path: "/dashboard/gamesapi",
        },
        { name: "Odds Jam API", path: "/dashboard/gamesapi" },
        {
          name: "Bet Construct API",
          path: "/dashboard/gamesapi",
        },
        { name: "Kambi API", path: "/dashboard/gamesapi" },
        { name: "Pinnacle API", path: "/dashboard/gamesapi" },
        { name: "SoftSwiss API", path: "/dashboard/gamesapi" },
        { name: "Betradar API", path: "/dashboard/gamesapi" },
        { name: "Evolution API", path: "/dashboard/gamesapi" },
        {
          name: "Pragmatic Play API",
          path: "/dashboard/gamesapi",
        },
        { name: "Playtech API", path: "/dashboard/games-api/playtech-api" },
        { name: "NetEnt API", path: "/dashboard/gamesapi" },
        {
          name: "Betsoft Gaming API",
          path: "/dashboard/gamesapi",
        },
      ],
    },
    {
      name: "Bonuses",
      icon: <GiRibbonMedal />,
      submenu: [
        { name: "Happy Hours" },
        { name: "Deposit Bonuses" },
        { name: "Refer Bonuses" },
        { name: "Welcome Bonuses" },
      ],
    },
    {
      name: "Game History",
      icon: <SlGameController />,
      submenu: [
        { name: "Play Stats" },
        { name: "Win Game Stats" },
        { name: "Loss Game Stats" },
      ],
    },
    { name: "Tournament", icon: <BsShop /> },
    { name: "Jack Pot", icon: <BsShop /> },
    {
      name: "Frontend",
      icon: <BsFront />,
      submenu: [
        { name: "Home Control" },
        { name: "Promotions", path: "/dashboard/promotionoffer" },
        { name: "Pages" },
        { name: "About Us" },
        { name: "FAQ" },
        { name: "Sponsorship" },
        { name: "Brand Ambassador" },
      ],
    },
    {
      name: "Banking Deposit",
      icon: <BsPiggyBank />,
      submenu: [
        { name: "Deposit Method" },
        { name: "Deposit History", path: "/dashboard/deposits" },
      ],
    },
    {
      name: "Banking Withdraw",
      icon: <BsBank />,
      submenu: [
        { name: "Withdraw Method" },
        { name: "Withdraw History", path: "/dashboard/withdraws" },
      ],
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { name: "Pincodes" },
        { name: "Activity Log" },
        { name: "Permissions" },
        { name: "Gateway API Keys" },
        { name: "SMS" },
        { name: "Mailings" },
        { name: "Support" },
        { name: "Security" },
      ],
    },
    {
      name: "Oracle Technology",
      icon: <IoLogoWechat />,
      submenu: [
        { name: "Instant Support" },
        { name: "Normal Support" },
        { name: "Permissions" },
        { name: "Notice" },
        { name: "About Us" },
        { name: "Contact Us" },
      ],
    },
  ];

  return (
    <div className="flex">
      {/* DashboardSidebar */}
      <DashboardSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          !open ? "md:pl-16" : "md:pl-64"
        }`}
      >
        <DashboardMobilMenu open={open} menuItems={menuItems} />
        <div className="mt-[62px] md:mt-16 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
