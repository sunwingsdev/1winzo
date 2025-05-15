import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const AccountStatement = () => {
  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Date/Time",
                "Deposit From Upline",
                "Deposit to Downline",
                "WihtDraw By Upline",
                "WithDraw From Downline",
                "Balance	",
                "Remark",
                "From/To",
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

export default AccountStatement;
