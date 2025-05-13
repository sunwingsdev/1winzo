import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { Link } from "react-router";

// Sample data (replace with actual JSON imports if required)
const mainCategories = [
  { name: "Dashboard", key: "dashboard", link: "/dashboard" },
  { name: "Downline KList", key: "downlineKList", link: "/downline-klist" },
  { name: "My Account", key: "myAccount" },
  { name: "My Report", key: "myReport" },
  { name: "Banner", key: "banner", link: "/banner" },
  { name: "BetList", key: "betList", link: "/bet-list" },
  { name: "Betlist Live", key: "betlistLive", link: "/betlist-live" },
  { name: "Risk Management", key: "riskManagement", link: "/risk-management" },
  { name: "Add Bank", key: "addBank", link: "/add-bank" },
  { name: "Wallet Management", key: "walletManagement" },
  { name: "Customer Support", key: "support" },
  { name: "Admin Setting", key: "adminSetting", link: "/admin-setting" },
];

const subCategories = {
  myReport: [
    { name: "Profit/Loss by Downline", link: "/my-report/report1" },
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
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSubCategories = (categoryKey) => {
    setActiveCategory(activeCategory === categoryKey ? null : categoryKey);
  };

  return (
    <div className="  ">
      <ul className="">
        {mainCategories.map((category) => (
          <li key={category.key}>
            {/* Main category link */}
            <div
              className="text-white flex justify-between items-center text-xs bg-black  border-b border-opacity-30 border-white cursor-pointer  hover:bg-[#4a4e42] hover:underline p-3"
              onClick={() =>
                subCategories[category.key] && toggleSubCategories(category.key)
              } // Toggle only if subcategories exist
            >
              {category.link ? (
                <Link to={category.link} className="flex-1">
                  {category.name}
                </Link> // If link exists, render the Link
              ) : (
                <span className="flex-1">{category.name}</span> // If no link, render the name as text
              )}

              {subCategories[category.key] && (
                <span className="text-xl">
                  {activeCategory === category.key ? (
                    <FaCaretUp />
                  ) : (
                    <FaSortDown />
                  )}
                </span>
              )}
            </div>

            {/* Render subcategories if they exist */}
            {subCategories[category.key] && activeCategory === category.key && (
              <ul className=" ">
                {subCategories[category.key].map((subCategory) => (
                  <li
                    key={subCategory.name}
                    className="text-gray-300 bg-[#2e3028]  hover:bg-[#4a4e42] cursor-pointer text-xs hover:underline border-b border-opacity-30 border-white p-3"
                  >
                    <Link to={subCategory.link}>{subCategory.name}</Link>
                 j </li>
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
