import React from "react";

const WalletDeposit = () => {
  return (
    <div>
      <h3 className="text-textHeadingColor font-semibold">Wallet Deposit</h3>

      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full  text-sm text-white">
          <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {[
                "Sr no.",	"UserName",	"Transaction ID",	"Account Name",	"Bank Name",	"Bank Account",	"Amount",	"Transaction Type",	"Transaction File ",	"Recipet Date",	"Action"
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
    </div>
  );
};

export default WalletDeposit;
