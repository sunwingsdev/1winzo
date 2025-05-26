import CustomPieChart from "@/components/Affiliate/AffDashBorad/CustomPieChart";
import CustomPieChartTwo from "@/components/Affiliate/AffDashBorad/CustomPieChartTwo";
import { useGetAllReferCodesQuery } from "@/redux/features/allApis/referCodesApi/referCodesApi";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const AffDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: allReferCodes } = useGetAllReferCodesQuery();

  const userReferral = allReferCodes?.find((item) => item.userId === user?._id);

  return (
    <div className="text-sm space-y-6">
      {/* Top Box */}
      <div className="bg-white w-[85%] shadow-md rounded-full p-4 flex justify-between items-center">
        <div className="font-semibold flex items-center space-x-2">
          <span>Referral Code:</span>
          <Link
            to={user?.referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white bg-green-700 px-2 rounded-full"
          >
            {user?.referralLink}
          </Link>
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
