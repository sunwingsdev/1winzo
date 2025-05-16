import React, { useState } from "react";

const RiskManagement = () => {
  const [activeTab, setActiveTab] = useState("matched");

  const tabStyles = (tab) =>
    `p-2 cursor-pointer text-xs font-bold  transition-all ${
      activeTab === tab
        ? " bg-[#4E7893] text-white hover:text-black"
        : "border-transparent text-[#254d6a] bg-[#d1d8dd]  "
    }`;

  return (
    <div className="w-full     rounded ">
      <div className="text-textHeadingColor font-semibold">
        <h3>Risk Management Summary</h3>
      </div>
      {/* Tabs */}
      <div className="flex start bg-bgBlue mt-2   ">
        <div
          onClick={() => setActiveTab("matched")}
          className={tabStyles("matched")}
        >
          Top 10 Matched Amount Player
        </div>
        <div
          onClick={() => setActiveTab("exposure")}
          className={tabStyles("exposure")}
        >
          Top 10 Exposure Player
        </div>
      </div>

      {/* Content */}
      <div className=" space-y-4">
        {/* Table 1 */}
        <div className="overflow-x-auto w-[40%] ">
          <table className="min-w-full  text-sm text-white">
            <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
              <tr className="">
                {["Deposit", "Exposure", "Matched Amount"].map(
                  (header, idx) => (
                    <th key={idx} className="px-2 py-2 font-normal  text-left">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="11"
                  className="px-2 p-1 text-gray-800 bg-white text-xs border-b border-borderTableColor "
                >
                  No records found
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Fancy bet */}
        <div className="p-2 pb-5 bg-[#DDDcD7]">
          <h3 className="text-textHeadingColor my-1 font-medium">Fancy Bet</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white">
              <thead className="text-xs bg-white text-textTableHeader border-y border-borderTableColor">
                <tr className="whitespace-nowrap ">
                  <th className="px-2 py-2 text-left w-[8%]">Sports</th>
                  <th className="px-2 py-2 text-left w-[10%]">Market Date</th>
                  <th className="px-2 py-2 text-left">Event/Market Name</th>

                  <th
                    className="px-2 py-2 text-center bg-[#F3DFB0] w-[20%]"
                    colSpan={2}
                  >
                    <div>
                      <h3 className="border-b border-borderTableColor pb-1">
                        Player P/L
                      </h3>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Min</span>
                        <span>Max</span>
                      </div>
                    </div>
                  </th>

                  <th className="px-2 py-2 text-right w-[6%]">Downline P/L</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan="6"
                    className="px-2 py-1 text-gray-800 bg-white text-xs border-b border-borderTableColor"
                  >
                    No Record found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Premium Cricket */}
        <div className="p-2 pb-5 bg-[#DDDcD7]">
          <h3 className="text-textHeadingColor font-medium my-1">Premium Cricket</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white">
              <thead className="text-xs bg-white text-textTableHeader border-y border-borderTableColor">
                <tr className="whitespace-nowrap ">
                  <th className="px-2 py-2 text-left w-[8%]">Sports</th>
                  <th className="px-2 py-2 text-left w-[10%]">Market Date</th>
                  <th className="px-2 py-2 text-left">Event/Market Name</th>

                  <th
                    className="px-2 py-2 text-center bg-[#F3DFB0] w-[20%]"
                    colSpan={2}
                  >
                    <div>
                      <h3 className="border-borderTableColor pb-1">
                        Player P/L
                      </h3>
                      
                    </div>
                  </th>

                  <th className="px-2 py-2 text-right w-[6%]">Downline P/L</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan="6"
                    className="px-2 py-1 text-gray-800 bg-white text-xs border-b border-borderTableColor"
                  >
                    No Record found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Binary */}
        <div className="p-2 pb-5 bg-[#DDDcD7]">
          <h3 className="text-textHeadingColor my-1 font-medium">Binary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-white">
              <thead className="text-xs bg-white text-textTableHeader border-y border-borderTableColor">
                <tr className="whitespace-nowrap ">
                  <th className="px-2 py-2 text-left w-[8%]">Sports</th>
                  <th className="px-2 py-2 text-left w-[10%]">Market Date</th>
                  <th className="px-2 py-2 text-left">Event/Market Name</th>

                  <th
                    className="px-2 py-2 text-center w-[20%]"
                    colSpan={2}
                  >
                    <div>
                      <h3 className="border-b border-borderTableColor pb-1">
                        Player P/L
                      </h3>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Min</span>
                        <span>Max</span>
                      </div>
                    </div>
                  </th>

                  <th className="px-2 py-2 text-right w-[6%]">Downline P/L</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td
                    colSpan="6"
                    className="px-2 py-1 text-gray-800 bg-white text-xs border-b border-borderTableColor"
                  >
                    No Record found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
