import React from "react";
import MyReportCommon from "@/components/Affiliate/AffiliateMyReport/MyReportCommon";

const AffReportDownline = () => {
  return (
    <div>
      <MyReportCommon
        heading="Profit/Loss Report by Downline"
        // tabs={["Casino", "CasinoGamePnL", "PlayerPnL"]} // Optional
        fromLabel="From"
        toLabel="To"
        showTimeInput={true}
        // selectOptions={["All", "Won", "Lost"]}
        // userSelectOptions={["All", "Won", "Lost"]}
        quickFilters={["Just for Today", "Just for Tomorrow", "Search","Reset"]} // Optional
        // sportTabs={["Cricket", "Soccer", "Tennis"]} // Optional
        tableHeaders={["UID", "Stake", "Downline P/L", "Player P/L","Comm.","Upline/Total P/L",]} // Optional
        // tableBody={[
        //     { match: "India vs AUS", bet: "Win", status: "Pending", amount: "500" },
        //     { match: "ENG vs PAK", bet: "Lose", status: "Lost", amount: "300" }
        // ]}
      />
    </div>
  );
};

export default AffReportDownline;
