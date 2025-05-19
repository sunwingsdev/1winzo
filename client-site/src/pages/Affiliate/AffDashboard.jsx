import CustomPieChart from "@/components/Affiliate/AffDashBorad/CustomPieChart";
import CustomPieChartTwo from "@/components/Affiliate/AffDashBorad/CustomPieChartTwo";
import React from "react";

const AffDashboard = () => {
  return (
    <div className="text-sm space-y-6">
      {/* Top Box */}
      <div className="bg-white w-[85%] shadow-md rounded-full p-4 flex justify-between items-center">
        <div className="font-semibold flex items-center space-x-2">
          <span>Referral Code:</span>
          <span className="bg-[#008000] text-white px-3 py-1 rounded-full">
            https://play71.live/register?referral_code=0e1746641753054
          </span>
        </div>
        <div className="text-[#2789CE] text-lg bg-[#F0F0F0] p-2 hover:underline rounded-md cursor-pointer">
          Auto Deposit App (deposit.apk)
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-2">
        <div className="w-1/2 rounded-lg p-4">
          <h3 className="text-xl w-full bg-bgBlue font-semibold mb-4 p-2 text-white">
            Live Sport Profit
          </h3>
          <div className="flex   justify-center border-8 border-white ">
            <CustomPieChart />
          </div>
        </div>

        <div className="w-1/2 rounded-lg p-4">
          <h3 className="text-xl bg-bgBlue w-full font-semibold mb-4 p-2 text-white">
            Backup Sport Profit
          </h3>
          <div className="flex justify-center border-8 border-white ">
            <CustomPieChartTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffDashboard;
