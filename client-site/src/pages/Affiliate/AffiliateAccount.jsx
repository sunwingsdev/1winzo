import AccountStatement from "@/components/Affiliate/AffiliateAccount/AccountStatement";
import AccountSummary from "@/components/Affiliate/AffiliateAccount/AccountSummary";
import ActivityLog from "@/components/Affiliate/AffiliateAccount/ActivityLog";
import Profile from "@/components/Affiliate/AffiliateAccount/Profile";
import React, { useState } from "react";

const tabData = [
  {
    heading: "Position",
    tabs: [
      { key: "account_statement", label: "Account Statement" },
      { key: "account_summary", label: "Account Summary" },
    ],
  },
  {
    heading: "Account Details",
    tabs: [
      { key: "profile", label: "Profile" },
      { key: "activity_log", label: "Activity Log" },
    ],
  },
];

const tabContents = {
  account_statement: <p><AccountStatement/></p>,
  account_summary: <p><AccountSummary/></p>,
  profile: <p><Profile/></p>,
  activity_log: <p><ActivityLog/></p>,
};

const AffiliateAccount = () => {
  const [activeTab, setActiveTab] = useState("account_statement");

  // Find active tab label
  const activeLabel =
    tabData
      .flatMap((section) => section.tabs)
      .find((tab) => tab.key === activeTab)?.label || "";
  return (
    <div>
      <div
        className="flex gap-2 items-center justify-center  border w-[10%] py-1 mb-4 bg-gradient-white-to-light  border-black border-opacity-20"
        
      >
        <div className="flex items-center justify-center bg-[#d77319] text-white rounded  w-6 h-4 shadow-md">
          <span className="text-[10px] font-bold">AF</span>
        </div>

        {/* play71## text */}
        <div className="text-sm font-medium text-black">play71##</div>
      </div>

      <div className="flex w-full    ">
        {/* Left Side Tabs */}

        <div className="w-1/4 pr-6 ">
          {tabData.map((section) => (
            <div key={section.heading} className="">
              <h3 className="text-xs font-semibold px-3 py-1 text-white bg-bgBlue ">
                {section.heading}
              </h3>
              {section.tabs.map((tab) => (
                <div
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`cursor-pointer border-b border-borderTableColor border-opacity-40  px-3 py-[5px]   text-xs ${
                    activeTab === tab.key
                      ? "bg-bgTabActiveColor text-gray-800 "
                      : " text-textBlueColor bg-white hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="w-3/4 ">
          <h3 className="text-xl font-semibold text-textHeadingColor mb-2">
            {activeLabel}
          </h3>
          <div className="">
            {tabContents[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateAccount;
