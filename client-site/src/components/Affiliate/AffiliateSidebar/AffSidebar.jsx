import React, { useState, useEffect } from "react";
import { FaSortDown, FaCaretUp } from "react-icons/fa";
import { Link, useLocation } from "react-router";
const mainCategories = [
  { name: "Dashboard", key: "dashboard", link: "/affiliate" },
  { name: "Downline KList", key: "downlineKList", link: "/affiliate/downline" },
  { name: "My Account", key: "myAccount",link:"/affiliate/account" },
  { name: "My Report", key: "myReport" },
  { name: "Banner", key: "banner", link: "/banner" },
  { name: "BetList", key: "betList", link: "/bet-list" },
  { name: "Betlist Live", key: "betlistLive", link: "/betlist-live" },
  { name: "Banking", key: "banking", link: "/baking" },
  { name: "Risk Management", key: "riskManagement", link: "/risk-management" },
  { name: "Add Bank", key: "addBank", link: "/add-bank" },
  { name: "Wallet Management", key: "walletManagement" },
  { name: "Bkash SMS", key: "bkashSms", link: "/bkash" },
  { name: "Nagad SMS", key: "nagadSms", link: "/nagad" },
  { name: "Rocket SMS", key: "rocketSms", link: "/rocket" },
  { name: "Block Market", key: "blockMarket", link: "/block-market" },
  { name: "Customer Support", key: "support" },
  { name: "Admin Setting", key: "adminSetting", link: "/admin-setting" },
];

const subCategories = {
  myReport: [
    { name: "Profit/Loss by Downline", link: "/affiliate/pl-downline" },
    { name: "Profit/Loss Report by Market", link: "/my-report/report2" },
    { name: "Profit/Loss Report by Player", link: "/my-report/report1" },
    { name: "Profit/Loss Sport Wise", link: "/my-report/report2" },
    { name: "All Casino Profit Loss", link: "/my-report/report1" },
    { name: "Casino Profit/Loss Report by Date", link: "/my-report/report2" },
    { name: "Casino P/L by DownLine", link: "/my-report/report1" },
    { name: "Profit/Loss AWC Casino Bets", link: "/my-report/report2" },
  ],
  walletManagement: [
    { name: "Wallet Deposit", link: "/wallet/transaction-history" },
    { name: "Wallet Withdrawal", link: "/wallet/withdraw" },
    { name: "Deposit History", link: "/wallet/withdraw" },
    { name: "Withdrawal History History", link: "/wallet/withdraw" },
  ],
};

const AffSidebar = () => {
  const [openKey, setOpenKey] = useState(null);
  const location = useLocation();

  // Close submenus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(e.target)) {
        setOpenKey(null); // Close all submenus when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="sidebar">
      <ul>
        {mainCategories.map((category) => (
          <li key={category.key}>
            <Link
              to={category.link || "#"}
              className={`text-white flex justify-between items-center text-xs bg-bgBlack border-b border-opacity-30 border-white cursor-pointer hover:bg-bgSidebarsBg p-3 ${
                category.link === location.pathname ||
                subCategories[category.key]?.some(
                  (sub) => sub.link === location.pathname
                )
                  ? "bg-bgSidebarsBg"
                  : "hover:underline"
              }`}
              onClick={() => {
                if (subCategories[category.key]) {
                  setOpenKey(openKey === category.key ? null : category.key);
                }
              }}
            >
              <p className="flex-1">{category.name}</p>
              {subCategories[category.key] && (
                <span className="text-xl">
                  {openKey === category.key ? <FaCaretUp /> : <FaSortDown />}
                </span>
              )}
            </Link>

            {subCategories[category.key] && openKey === category.key && (
              <ul>
                {subCategories[category.key].map((sub) => (
                  <Link
                    to={sub.link}
                    key={sub.name}
                    className={`block text-gray-300 bg-[#2e3028] text-xs border-b border-opacity-30 border-white p-3 ${
                      location.pathname === sub.link
                        ? "bg-white text-gray-800 font-semibold"
                        : "hover:bg-bgSidebarsBg hover:underline"
                    }`}
                  >
                    {sub.name}
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AffSidebar;
