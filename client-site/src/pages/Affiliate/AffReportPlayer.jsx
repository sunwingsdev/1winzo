import MyReportCommon from "@/components/Affiliate/AffiliateMyReport/MyReportCommon";
import React from "react";

const AffReportPlayer = () => {
  return (
    <div>
      <MyReportCommon
        heading="Profit/Loss Report by Player"
        // tabs={["Casino", "CasinoGamePnL", "PlayerPnL"]} // Optional
        fromLabel="From"
        toLabel="To"
        showTimeInput={true}
        selectOptions={["100 Txn", "200 Txn", "300 Txn"]}
        // userSelectOptions={["All", "Won", "Lost"]}
        showKeyword={false}
        showStatus={false}
        quickFilters={[
          "Just for Today",
          "Just for Tomorrow",
          "Search",
          "Reset",
        ]} // Optional
        sportTabs={["Cricket", "Soccer", "Tennis"]} // Optional
        tableHeaders={[
          "UID",
          "Downline P/L",
          "	Player P/L",
          "	Comm.",
          "Upline P/L",
        ]} // Optional
        // tableBody={[
        //     { match: "India vs AUS", bet: "Win", status: "Pending", amount: "500" },
        //     { match: "ENG vs PAK", bet: "Lose", status: "Lost", amount: "300" }
        // ]}
      />
    </div>
  );
};

export default AffReportPlayer;
