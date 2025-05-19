import React from 'react';

const AccountSummary = () => {
  return (
    <div className="bg-white shadow w-full py-2 px-4 rounded">
      <div className="w-[15%] border-r border-borderTableColor border-opacity-40">
        <h3 className="text-sm font-semibold text-black">Total Balance</h3>
        <div className="flex items-center gap-2 ">
          <span className="text-3xl font-semibold text-textBlueColor">0.00</span>
          <span className=" text-gray-400 mt-4">BDT</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
