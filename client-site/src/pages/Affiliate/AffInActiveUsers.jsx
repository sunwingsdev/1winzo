import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const AffInActiveUsers = () => {
  return (
    <div>
      <h3 className="text-textHeadingColor font-semibold">In Active Users</h3>
      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Account",
                "Cedit Ref",
                "Balance",
                "Exposure",
                "Avail, Balance",
                "Player Balance	",
                "Exposure Limit",
                "Status",
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
                colSpan="11"
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

export default AffInActiveUsers;
