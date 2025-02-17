import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router";

const NagadModal = ({ closeNagadModal }) => {
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#ffffff] rounded-lg shadow-md p-6 flex flex-col overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeNagadModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* <div className="">
          <p className="text-lg font-bold text-black">Deposit</p>
          <div className="grid grid-cols-3 gap-2">
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
            <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
              400 BDT
            </p>
          </div>
        </div> */}
        {/* Header */}
        <div className="flex items-center space-x-3">
          <img
            className="w-32 m-auto"
            src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
            alt=""
          />
        </div>

        <div className="flex gap-2">
          <div className="w-3/4 text-white bg-[#ee3c42]  py-2 px-3 rounded-lg">
            <h2 className="text-xl font-semibold">Hasan Islam</h2>
            <p className="text-sm">Mobile : 01700000000</p>
          </div>
          <div className="w-1/4 text-center text-white bg-[#ee3c42]  py-2 px-3 rounded-lg">
            <h2 className="text-xl font-semibold">
              9000 <span className="">BDT</span>
            </h2>
          </div>
        </div>

        <form action="">
          <input
            type="number"
            className="w-full my-2 px-5 py-3 bg-gray-200 border-2 border-gray-400 rounded-lg focus:outline-none placeholder-black"
            placeholder="Sender Account Number"
            required
          />
          <input
            type="text"
            className="w-full my-2 px-5 py-3 bg-gray-200 border-2 border-gray-400 rounded-lg focus:outline-none placeholder-black"
            placeholder="Transaction ID"
            required
          />
        </form>

        <div className="text-[#f3f3f3] bg-[#ee3c42] text-base rounded-md py-4 pl-6 pr-3 mt-2">
          <ul>
            <li className="list-decimal">
              Go to your NAGAD Mobile Menu by dialing: *167# or Open NAGAD App.
            </li>
            <li className="list-decimal mt-1">
              Choose: {'"'}
              <Link className="text-white font-bold">Send Money</Link>
              {'"'}
            </li>
            <li className="list-decimal mt-1">
              Enter the Receiver Account Number: {'"'}
              <Link className="text-white font-bold">01700000000</Link>
              {'"'}
            </li>
            <li className="list-decimal mt-1">
              Enter the amount: {'"'}
              <span className="text-white font-bold">1634</span>
              {'"'}
            </li>
            <li className="list-decimal mt-1">
              Now enter your NAGAD Mobile Menu PIN to confirm.
            </li>
            <li className="list-decimal mt-1">
              Done! You will receive a confirmation message from NAGAD
            </li>
            <li className="list-decimal mt-1">
              Put the {'"'}
              <span className="text-white font-bold">Transaction ID</span>
              {'"'} in the upper box and press{" "}
              <span className="text-white font-bold">VERIFY</span>
              {'"'}
            </li>
          </ul>
        </div>

        {/* Payment Button */}
        <button className="mt-2 w-full py-2 bg-[#ee3c42] text-white rounded-md hover:bg-[#d8373c] duration-300">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default NagadModal;
