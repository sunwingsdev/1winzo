import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AffSearchUser = () => {
  const quickFilters = [
    "Search",
    "Statement",
    "Block for Cheat",
   
  ];
  const [activeFilter, setActiveFilter] = useState(quickFilters[0] || null);
  const [password, setPassword] = useState("");
  
    const handleSubmit = () => {
      console.log("Submitted Password:", password);
      // Your actual submit logic here
    };

  return (
    <div className="space-y-6">
      <h3>Search User</h3>
      <div className="flex  items-center gap-2">
        <div className="flex  items-center border border-gray-400 py-2 bg-white rounded overflow-hidden w-[25%]">
          <span className="px-3 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Find members"
            className="flex-1 placeholder:text-xs px-2 py-1 text-black text-xs outline-none"
          />
        </div>
        <div>
          {quickFilters.length > 0 && (
            <div className="flex items-center gap-2 ">
              {quickFilters.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFilter(btn)}
                  className={`px-4 py-1 rounded border text-xs font-bold  
          ${
            activeFilter === btn
              ? "bg-bgYellowColor border-borderYellowColor  hover:bg-bgHoverYellowColor text-black border "
              : "bg-gradient-white-to-light hover-offwhite-gradient border-borderTableColor border-opacity-80"
          }
        `}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Super Agent",
                "Agent",
                "User",
              ].map((header, idx) => (
                <th key={idx} className="px-2 py-2 font-normal  text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="3"
                className="px-2 p-1 text-gray-800 bg-white text-xs border-b border-borderTableColor "
              >
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Username",
                "Balance",
                "Available D/W",
                "Exposure",
                "Status",
                "Action",
                "Deposit/Withdraw",
              ].map((header, idx) => (
                <th key={idx} className="px-2 py-2 font-normal  text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td
                colSpan="7"
                className="px-2 p-1 text-gray-800 bg-white text-xs border-b border-borderTableColor "
              >
                No records found
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center bg-white py-4 gap-4 mt-4">
        

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

export default AffSearchUser;
