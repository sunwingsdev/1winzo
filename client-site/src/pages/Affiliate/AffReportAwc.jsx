import MyReportCommon from '@/components/Affiliate/AffiliateMyReport/MyReportCommon';
import React from 'react';

const AffReportAwc = () => {
    return (
        <div>
            <MyReportCommon
                    heading="Profit Loss Awc"
                     tabs={["Casino", "CasinoGamePnL", "PlayerPnL"]} // Optional
                    fromLabel="Period From"
                     toLabel="Period To"
                    // showTimeInput={true}
                      selectOptions={["100 Txn", "200 Txn", "300 Txn"]}
                     userSelectOptions={["Select User", "Unselect User", ]}
                    quickFilters={["Just for Today", "Just for Tomorrow", "Get P/L",]} // Optional
                    //  sportTabs={["Cricket", "Soccer", "Tennis"]} // Optional
                    tableHeaders={["SportName", "Player P/L", "DownLine P/L", "	Agent Comm. P/L","		Upline P/L"]} // Optional
                    // tableBody={[
                    //     { match: "India vs AUS", bet: "Win", status: "Pending", amount: "500" },
                    //     { match: "ENG vs PAK", bet: "Lose", status: "Lost", amount: "300" }
                    // ]}
                  />
        </div>
    );
};

export default AffReportAwc;