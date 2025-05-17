import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

const AffBanking = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Submitted Password:", password);
    // Your actual submit logic here
  };

  const handleClear = () => {
    setPassword("");
    console.log("Password cleared");
  };
  return (
    <div className="space-y-2">
      <h3 className="text-textHeadingColor font-semibold">Banking</h3>
      {/* Search and status select */}
      <div className="flex items-center w-full  gap-4">
        {/* Search */}
        <div className="flex  items-center border border-gray-400 py-2 bg-white rounded overflow-hidden w-[25%]">
          <span className="px-3 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Find members"
            className="flex-1 placeholder:text-xs px-2 py-1 text-black text-xs outline-none"
          />
          <button className="bg-[#FDB72F] mr-1 px-2 py-1 text-black hover:text-white font-medium hover:bg-blue-700 text-xs">
            Search
          </button>
        </div>

        {/* Status select */}
        <div className="flex items-center w-[16%]   rounded ">
          <span className=" text-black px-1 font-semibold text-xs">Status</span>
          <select className="px-2 py-1 text-black outline-none border rounded-md border-gray-400 w-full">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        {/* reload icon */}
        <div className="flex justify-start">
          <span className=" text-lg">
            <TbReload />
          </span>
        </div>
      </div>

      {/* Balance */}
      <div className="bg-[#E0E6E6] shadow w-full py-2 px-4 rounded">
        <div className="w-[20%]   flex items-center gap-4">
          <h3 className="text-sm  text-black">Your Balance</h3>
          <div className="flex items-center gap-1 ">
            <span className=" text-black text-sm mt-4">BDT</span>
            <span className="text-3xl font-semibold text-black">0.00</span>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr>
              <th className="px-2 py-2 font-normal text-left">UID</th>
              <th className="px-2 py-2 font-normal text-left">Balance</th>
              <th className="px-2 py-2 font-normal text-left">Available D/W</th>
              <th className="px-2 py-2 font-normal text-left">Exposure</th>
              <th className="px-2 py-2 font-normal text-left">
                <div className="flex items-center gap-4">
                  <button className="bg-white  border border-borderTableColor border-opacity-80 px-3 py-1 rounded text-xs">
                    Check
                  </button>
                  <span className="text-xs text-gray-700">Check Balance</span>
                </div>
              </th>
              <th className="px-2 py-2 font-normal text-left">
                Deposit / Withdraw
              </th>
              <th className="px-2 py-2 font-normal text-left">
                Credit Reference
              </th>
              <th className="px-2 py-2 font-normal text-left">Reference P/L</th>
              <th className="px-2 py-2 font-normal text-left">Remark</th>
              <th className="px-2 py-2 font-normal text-left">All Logs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="11"
                className="px-2 p-1 text-gray-800 bg-opacity-5 bg-bgBlack text-xs border-b border-borderTableColor "
              >
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* submit */}

      <div className="flex items-center justify-center bg-white py-4 gap-4 mt-4">
        {/* Clear All Button */}
        <button
          onClick={handleClear}
          className="bg-[#F3F3F3] border border-borderTableColor border-opacity-30 hover:border-opacity-100 text-black px-4 py-2 rounded text-sm"
        >
          Clear All
        </button>

        {/* Password Field */}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log("Password typing:", e.target.value);
          }}
          placeholder=" password"
          className="px-4 py-2 border border-borderTableColor border-opacity-80 rounded text-sm w-[25%] text-black"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-[#FFCC2F] hover:bg-[#dda90d] text-black font-medium px-4 py-2 rounded text-sm flex items-center gap-2"
        >
          Submit
          <span className="bg-[#FFFF91] text-black border border-borderYellowColor rounded-full p-2 text-xs leading-none">
            0
          </span>
          Payment
        </button>
      </div>
    </div>
  );
};

export default AffBanking;
