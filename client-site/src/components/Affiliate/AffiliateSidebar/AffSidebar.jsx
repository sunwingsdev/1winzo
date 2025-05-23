import { logout } from "@/redux/slices/authSlice";
import React, { useState, useEffect } from "react";
import { FaSortDown, FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { useToasts } from "react-toast-notifications";

// Role-based menu access configuration
const menuAccess = {
  "mother-admin": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    banner: true,
    betList: true,
    betlistLive: true,
    riskManagement: true,
    banking: true,
    addBank: true,
    depositMethod: true,
    withdrawmethod: true,
    walletManagement: true,
    bkashSms: true,
    nagadSms: true,
    rocketSms: true,
    blockMarket: true,
    support: true,
    adminSetting: true,
  },
  "b2b-admin": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    banner: true,
    support: true,
    adminSetting: true,
  },
  "b2c-admin": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    betList: true,
    betlistLive: true,
    riskManagement: true,
    banking: true,
    addBank: true,
    depositMethod: true,
    withdrawmethod: true,
    walletManagement: true,
    bkashSms: true,
    nagadSms: true,
    rocketSms: true,
    blockMarket: true,
    support: true,
    adminSetting: true,
  },
  "super-agent": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    support: true,
    adminSetting: true,
  },
  "master-agent": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    betList: true,
    betlistLive: true,
    riskManagement: true,
    banking: true,
    addBank: true,
    walletManagement: true,
    support: true,
    adminSetting: true,
  },
  "super-affiliate": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    support: true,
    adminSetting: true,
  },
  "master-affiliate": {
    dashboard: true,
    downlineList: true,
    myAccount: true,
    myReport: true,
    support: true,
    adminSetting: true,
  },
  user: {
    dashboard: true,
    myAccount: true,
  },
};

const subCategories = {
  myReport: [
    { name: "Profit/Loss by Downline", link: "/affiliate/pl-downline" },
    { name: "Profit/Loss Report by Market", link: "/affiliate/report-market" },
    { name: "Profit/Loss Report by Player", link: "/affiliate/report-player" },
    { name: "Profit/Loss Sport Wise", link: "/affiliate/report-wise" },
    { name: "All Casino Profit Loss", link: "/affiliate/report-casino" },
    {
      name: "Casino Profit/Loss Report by Date",
      link: "/affiliate/report-date",
    },
    {
      name: "Casino P/L by DownLine",
      link: "/affiliate/report-casinodownline",
    },
    { name: "Profit/Loss AWC Casino Bets", link: "/affiliate/report-awc" },
  ],
  walletManagement: [
    { name: "Wallet Deposit", link: "/affiliate/wallet-deposit" },
    { name: "Wallet Withdrawal", link: "/affiliate/wallet-withdrawal" },
    { name: "Deposit History", link: "/affiliate/deposit-history" },
    { name: "Withdrawal History", link: "/affiliate/withdraw-history" },
  ],
};

const allMainCategories = [
  { name: "Dashboard", key: "dashboard", link: "/affiliate" },
  { name: "Downline List", key: "downlineList", link: "/affiliate/downline" },
  { name: "My Account", key: "myAccount", link: "/affiliate/account" },
  { name: "My Report", key: "myReport" },
  { name: "Banner", key: "banner", link: "/affiliate/banner" },
  { name: "BetList", key: "betList", link: "/affiliate/betlist" },
  { name: "Betlist Live", key: "betlistLive", link: "/affiliate/betlist-live" },
  {
    name: "Risk Management",
    key: "riskManagement",
    link: "/affiliate/risk-management",
  },
  { name: "Banking", key: "banking", link: "/affiliate/banking" },
  { name: "Add Bank", key: "addBank", link: "/affiliate/add-bank" },
  {
    name: "Deposit Method",
    key: "depositMethod",
    link: "/affiliate/depositmethod",
  },
  {
    name: "Withdraw Method",
    key: "withdrawmethod",
    link: "/affiliate/withdrawmethod",
  },
  { name: "Wallet Management", key: "walletManagement" },
  { name: "Bkash SMS", key: "bkashSms", link: "/affiliate/bkash-sms" },
  { name: "Nagad SMS", key: "nagadSms", link: "/affiliate/nagad-sms" },
  { name: "Rocket SMS", key: "rocketSms", link: "/affiliate/rocket-sms" },
  { name: "Block Market", key: "blockMarket", link: "/affiliate/block-market" },
  {
    name: "Customer Support",
    key: "support",
    link: "/affiliate/customer-support",
  },
  {
    name: "Admin Setting",
    key: "adminSetting",
    link: "/affiliate/admin-setting",
  },
];

const AffSidebar = () => {
  const [openKey, setOpenKey] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const userRole = useSelector((state) => state.auth.user?.role) || "user";

  const filteredCategories = allMainCategories.filter((category) => {
    return menuAccess[userRole]?.[category.key];
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(e.target)) {
        setOpenKey(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/ag");
  };

  return (
    <div id="sidebar">
      <ul>
        {filteredCategories.map((category) => (
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
        <li
          className={`text-white flex justify-between items-center text-xs bg-bgBlack border-b border-opacity-30 border-white cursor-pointer hover:bg-bgSidebarsBg p-3 hover:underline`}
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default AffSidebar;
