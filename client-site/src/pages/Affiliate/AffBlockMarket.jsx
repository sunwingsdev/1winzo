import React, { useState } from "react";
import { X } from "lucide-react";

const AffBlockMarket = () => {
  const initialData = {
    row1: {
      betfairId: "6",
      name: "John Doe",
      status: "Inter Casino is ON",
      isActive: true,
    },
    row2: {
      betfairId: "1",
      name: "Jane Smith",
      status: "Inter Casino is Off",
      isActive: false,
    },
    row3: {
      betfairId: "0",
      name: "Mike Tyson",
      status: "Cricket is ON",
      isActive: true,
    },
    row4: {
      betfairId: "0",
      name: "Bruce Wayne",
      status: "Tennis is ON",
      isActive: false,
    },
    row5: {
      betfairId: "4",
      name: "Clark Kent",
      status: "Soccer is ON",
      isActive: true,
    },
    row6: {
      betfairId: "3",
      name: "Diana Prince",
      status: "Soccer is ON",
      isActive: false,
    },
    row7: {
      betfairId: "6",
      name: "Barry Allen",
      status: "Agent Withdrawal is OFF",
      isActive: true,
    },
  };

  const [tableData, setTableData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const handleSwitchClick = (key) => {
    setSelectedKey(key);
    setShowModal(true);
  };

  const confirmToggle = () => {
    if (selectedKey) {
      setTableData((prev) => ({
        ...prev,
        [selectedKey]: {
          ...prev[selectedKey],
          isActive: !prev[selectedKey].isActive,
        },
      }));
    }
    setShowModal(false);
    setSelectedKey(null);
  };

  const cancelToggle = () => {
    setShowModal(false);
    setSelectedKey(null);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-white">
          <thead className="text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader border-borderTableColor">
            <tr>
              {["S.No.", "Betfair ID", "Name", "Status", "Action"].map(
                (header, idx) => (
                  <th key={idx} className="px-2 py-2 font-normal text-left">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white text-black text-xs">
            {Object.keys(tableData).map((key, index) => {
              const row = tableData[key];
              return (
                <tr
                  key={key}
                  className="border-b border-borderTableColor text-textTableRow whitespace-nowrap"
                >
                  <td className="px-2 py-2">{index + 1}</td>
                  <td className="px-2 py-2">{row.betfairId}</td>
                  <td className="px-2 py-2 underline">{row.name}</td>
                  <td className="px-2 py-2">{row.status}</td>
                  <td className="px-3 py-2">
                    <label className="relative inline-block w-12 h-6 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={row.isActive}
                        onChange={() => handleSwitchClick(key)}
                        className="sr-only peer"
                      />
                      <div className="w-full h-full bg-white rounded-full border border-[#2196f3] peer-checked:bg-[#2196f3] transition-colors duration-300"></div>
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-[#4599de] peer-checked:bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60"
          onClick={cancelToggle}
        >
          <div
            className="flex justify-center items-start mt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-bgModalColor p-4 rounded-lg w-[90%] max-w-[410px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-textHeadingColor font-semibold">
                  Block/Un-Block Match
                </h2>
                <button
                  onClick={cancelToggle}
                  className="bg-black text-white rounded"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex gap-1 px-4 mb-4">
                <label className="block text-sm font-medium text-black">
                  Remark:
                </label>
                <textarea
                  className="w-[80%] border border-borderTableColor border-opacity-80 rounded"
                  rows="3"
                />
              </div>

              <div className="flex justify-center text-[#212529] mb-6 font-medium">
                <p>
                  {tableData[selectedKey]?.isActive
                    ? "You Want to InActive This Match?"
                    : "You Want to Active This Match?"}
                </p>
              </div>

              <div className="flex justify-center text-xs space-x-2">
                <button
                  onClick={confirmToggle}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Confirm
                </button>

                <button
                  onClick={cancelToggle}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffBlockMarket;
