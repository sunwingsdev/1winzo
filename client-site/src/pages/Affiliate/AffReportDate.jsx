import MyReportCommon from "@/components/Affiliate/AffiliateMyReport/MyReportCommon";
import React from "react";

const AffReportDate = () => {
  return (
    <div>
      <MyReportCommon
        heading="Profit/Loss Report by Date"
        // tabs={["Casino", "CasinoGamePnL", "PlayerPnL"]} // Optional
        selectSportsOptions={["All"]}
        selectTimeZoneOptions={["IST(Bangalore/Bombay)"]}
        fromLabel="Period"
        toLabel="To"
        showTimeInput={true}
        selectDataOptions={["DB"]}
        // selectOptions={["All", "Won", "Lost"]}
        // userSelectOptions={["All", "Won", "Lost"]}
        quickFilters={[
          "Just for Today",
          "Just for Tomorrow",
          "Search",
          "Reset",
        ]} // Optional
        // sportTabs={["Cricket", "Soccer", "Tennis"]} // Optional
        tableHeaders={[
          "UID",
          "Stake",
          "Downline P/L",
          "Player P/L",
          "Comm.",
          "Upline/Total P/L",
        ]} 

        tableBody={[

          {
            key: "row1",
            uid: "2025-05-14",
            stake: "0",
            "downline p/l": "(0.00)",
            "player p/l": "(0.00)",
            "comm.": "0",
            "upline/total p/l": "(0.00)",
          },
          {
            key: "row2",
            uid: "2025-05-15",
            stake: "0",
            "downline p/l": "(0.00)",
            "player p/l": "(0.00)",
            "comm.": "0",
            "upline/total p/l": "(0.00)",
          },
          {
            key: "row3",
            uid: "Total",
            stake: "0",
            "downline p/l": "(0.00)",
            "player p/l": "0.00",
            "comm.": "0.00",
            "upline/total p/l": "(0.00)",
          },
        ]}
      />
    </div>
  );
};

export default AffReportDate;
