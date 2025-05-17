import MyReportCommon from '@/components/Affiliate/AffiliateMyReport/MyReportCommon';
import React from 'react';

const AffBikash = () => {
    return (
         <div>
      <MyReportCommon
        heading="Bkash SMS"
        // tabs={["Casino", "CasinoGamePnL", "PlayerPnL"]} // Optional
        // sportRadioOptions={[
        //   "Cricket",
        //   "Tennis",
        //   "Soccer",
        //   "Casino",
        //   "Bet Fair",
        //   "Bookmaker",
        //   "Fancy",
        //   "SportsBook",
        //   "Tie",
        //   "Toss",
        // ]}
        // orderDisplayOptions={["Stake", "Time"]}
        // lastSelectOptionsNew={["25 Txn", "50 Txn", "100 Txn"]}
        // ofSelectOptionsNew={["Ascending", "Descending"]}
        // autoRefreshOptions={["Stop", "60", "30"]}
        // betStatusOptionsNew={["Active", "Suspend"]}
        // selectSportsOptions={["All"]}
        // selectTimeZoneOptions={["IST(Bangalore/Bombay)"]}
        // betStatusOptions={["Unmatched", "Matched","Setteled","Cancelled","Voided"]}
        // lastSelectOptions={["100 Txn", "200 Txn", "500 Txn"]}
        showKeyword={true}
         showStatus={false}
        fromLabel="From"
        toLabel="To"
        showTimeInput={true}
        // selectDataOptions={["DB"]}
        // selectOptions={["All", "Won", "Lost"]}
        // userSelectOptions={["All", "Won", "Lost"]}
        quickFilters={["Just For Today", "From Yesterday", "Search", "Reset"]} // Optional
        // showDepositStatus={true}
        // sportTabs={["Cricket", "Soccer", "Tennis"]} // Optional
        // text="Betting History enables you to review the bets you have placed. Specify
        // the time period during which your bets were placed, the type of markets
        // on which the bets were placed, and the sport. Betting History is
        // available online for the past 30 days."
        // matched="Matched"
        tableHeaders={[
          "Sr no.",
          "Sender",
          "Message",
          "Message Time",
          "Transaction ID",
          "App User",
          "Device Name",
          
        ]}
        // tableBody={[
        //   {
        //     key: "row1",
        //     uid: "2025-05-14",
        //     stake: "0",
        //     "downline p/l": "(0.00)",
        //     "player p/l": "(0.00)",
        //     "comm.": "0",
        //     "upline/total p/l": "(0.00)",
        //   },
        //   {
        //     key: "row2",
        //     uid: "2025-05-15",
        //     stake: "0",
        //     "downline p/l": "(0.00)",
        //     "player p/l": "(0.00)",
        //     "comm.": "0",
        //     "upline/total p/l": "(0.00)",
        //   },
        //   {
        //     key: "row3",
        //     uid: "Total",
        //     stake: "0",
        //     "downline p/l": "(0.00)",
        //     "player p/l": "0.00",
        //     "comm.": "0.00",
        //     "upline/total p/l": "(0.00)",
        //   },
        // ]}
      />
    </div>
    );
};

export default AffBikash;