import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const AffInActiveMatches = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-textHeadingColor font-semibold">In Active Matches</h3>
      <div className="flex items-center gap-2">
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
        <div className="flex w-[25%] ">
          
            <select className="flex-1 border   border-borderTableColor border-opacity-80 rounded px-3 py-1">
              <option value="default" disabled>
                Cricket
              </option>
              <option value="alltime">Cricket </option>
              <option value="alltime">Tennis</option>
              <option value="alltime">Soccer</option>
              <option value="alltime">Casino</option>
            </select>
          
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Sport",
                "Event Id",
                "Market Id",
                "Match",
                "Date",
                "Status	",
                "Action",
                
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
                colSpan="7"
                className="px-2 p-1 text-gray-800 bg-opacity-5 bg-bgBlack text-xs border-b border-borderTableColor "
              >
                No records found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* arrow */}
      <div className="flex justify-center text-textTableHeader items-center gap-4 mt-4">
              <button className="px-1 py-1 bg-bgTableHeader  rounded border-borderTableColor border border-opacity-30 ">
                <MdKeyboardArrowLeft /> {/* ‹ Less-than arrow */}
              </button>
              <button className="px-1 py-1 bg-bgTableHeader     border rounded border-opacity-30 border-borderTableColor ">
                <MdKeyboardArrowRight /> {/* › Greater-than arrow */}
              </button>
            </div>
    </div>
  );
};

export default AffInActiveMatches;
