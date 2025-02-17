import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import React, { useContext, useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { LuClipboardCopy } from "react-icons/lu";

const Deposit = () => {
  //   const [activeTabTop, setActiveTabTop] = useState("SUPPORT");
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");

  const openNagadContent = () => setIsNagadContentOpen(true);
  const backNagadContent = () => setIsNagadContentOpen(false);

  const openRocketContent = () => setIsRocketContentOpen(true);
  const backRocketContent = () => setIsRocketContentOpen(false);

  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="pt-40 space-y-5">
      {/* Deposit start 01 */} {/* Withdraw start 01 */}
      <div className="bg-[#152234] p-4 w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold text-white bg-blue-500 rounded-md">
          Deposit
        </h2>
        <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-200 border-2 border-blue-500">
          <IoHomeOutline size={30} />
          <div className="flex gap-3">
            <MdGTranslate size={30} />
            <IoMdClose size={30} />
          </div>
        </div>
        <div className="flex justify-between gap-2 px-4">
          <img className="w-40" src={logo} alt="" />
          <div className="flex items-center gap-2">
            <button className="w-20 h-7 text-xs font-semibold text-white bg-blue-500 border border-white rounded-lg">
              Support
            </button>
            <button className="w-20 h-7 text-xs font-semibold text-white bg-red-600 border border-white rounded-lg">
              Support
            </button>
          </div>
        </div>
        {/* Bottom Tabs */}
        <div className="mt-6">
          <div className="flex">
            <button
              onClick={() => setActiveTabBottom("MOBILE_BANKING")}
              className={`flex-1 py-2 font-semibold text-center rounded-l-md ${
                activeTabBottom === "MOBILE_BANKING"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-200"
              }`}
            >
              MOBILE BANKING
            </button>
            <button
              onClick={() => setActiveTabBottom("BANK_TRANSFER")}
              className={`flex-1 py-2 font-semibold text-center rounded-r-md ${
                activeTabBottom === "BANK_TRANSFER"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-200"
              }`}
            >
              BANK TRANSFER
            </button>
          </div>

          {/* Tab Content for Bottom Tabs */}
          <div className="mt-4">
            {activeTabBottom === "MOBILE_BANKING" ? (
              <div className="grid grid-cols-3 gap-2">
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/bkash.png"
                      alt=""
                    />
                  </div>
                </Link>
                <button onClick={openNagadContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                      alt=""
                    />
                  </div>
                </button>
                <button onClick={openRocketContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                      alt=""
                    />
                  </div>
                </button>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/bkash.png"
                      alt=""
                    />
                  </div>
                </Link>
                <button onClick={openNagadContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                      alt=""
                    />
                  </div>
                </button>
                <button onClick={openRocketContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                      alt=""
                    />
                  </div>
                </button>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/bkash.png"
                      alt=""
                    />
                  </div>
                </Link>
                <button onClick={openNagadContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                      alt=""
                    />
                  </div>
                </button>
                <button onClick={openRocketContent}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            )}
            <div className="w-28 m-auto pt-3">
              <button className="py-1 px-4 w-full text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-white rounded-lg duration-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Deposit End 01 */} {/* Withdraw start 01 */}
      {/* Deposit start 02 */}
      <div className="bg-[#152234] w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold text-white border-b-2 border-gray-500">
          Deposit
        </h2>
        <div className="pb-4 px-4 space-y-4">
          <div className="flex items-center gap-3">
            <BsArrowLeftSquare size={26} className="text-gray-500" />
            <p className="text-white text-base font-semibold">
              Choose other payment
            </p>
          </div>
          <div className="my-4">
            <form action="">
              <div className="grid grid-cols-3 gap-2">
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
                <p className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500">
                  400 BDT
                </p>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="text-gray-500 text-base font-semibold"
                >
                  Enter Amount
                </label>
                <input
                  type="text"
                  className="w-full my-2 px-5 py-2 font-bold bg-[#152234] border border-gray-500 rounded-lg focus:outline-none placeholder-white text-white"
                  placeholder="1000 BDT"
                  required
                />
              </div>
              <p className="text-base font-medium text-gray-500">
                Max. deposit : <span className="text-cyan-400">25000 BDT</span>
              </p>
              <div className="w-full m-auto pt-3">
                <button className="py-1 px-4 w-full text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-white rounded-lg duration-300">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Deposit End 02 */}
      {/* Deposit Start 03 */}
      <div className="bg-[#152234] p-4 w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold border-2 border-white text-white bg-red-600 rounded-md">
          NAGAD MOBILE BANKING
        </h2>
        <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
          <IoHomeOutline size={30} />
          <div className="flex gap-3">
            <MdGTranslate size={30} />
            <IoMdClose size={30} />
          </div>
        </div>
        <div className="p-3 bg-red-600 border-2 border-white">
          <div className="flex justify-around gap-2">
            <div className="bg-white rounded-xl">
              <img
                className="w-32 m-auto"
                src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-base text-center font-semibold text-white">
                টাকার পরিমান{" "}
              </p>
              <div className="bg-white w-full mt-1 py-1 px-20 text-2xl text-center rounded-lg font-bold">
                1000
              </div>
            </div>
          </div>
          <form action="">
            <div className="">
              <p className="text-white mt-4 text-sm text-center font-semibold">
                সেন্ড একাউন্ট নম্বর
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="সেন্ড একাউন্ট নম্বর"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-sm text-center font-semibold">
                ট্রানজেকশন আইডি দিন
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="ট্রানজেকশন আইডি দিন"
                required
              />
            </div>
          </form>
          <div className="">
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Go to your NAGAD Mobile Menu by dialing: *167# or Open NAGAD
              App.
            </p>
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Choose:{" "}
              <span className="text-yellow-300 text-base">
                {'"'}Send Money{'"'}
              </span>
            </p>
            <p className="flex gap-2 cursor-pointer text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Enter the Receiver Account Number: 013****{" "}
              <span className="text-white bg-[#0808086c] w-16 justify-center rounded-lg flex items-center gap-1">
                <LuClipboardCopy /> Copy
              </span>
            </p>
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Enter the amount:{" "}
              <span className="text-yellow-300 text-base">94000</span>{" "}
            </p>
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Now enter your NAGAD Mobile Menu PIN to confirm.
            </p>
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ Done! You will receive a confirmation message from NAGAD
            </p>
            <p className="text-xs font-semibold text-gray-300 py-2">
              ▪ Put theTransaction ID in the upper box and pressVERIFY
            </p>
          </div>
        </div>
        <div className="w-40 m-auto pt-3">
          <button className="py-2 px-4 w-full text-xl font-semibold text-white bg-red-600 hover:bg-red-700 border border-white rounded-lg duration-300">
            Deposit Now
          </button>
        </div>
      </div>
      {/* Deposit End 03 */}
      {/* Deposit Start 04 */}
      <div className="bg-[#152234] p-4 w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold border-2 border-white text-white bg-violet-600 rounded-md">
          NAGAD MOBILE BANKING
        </h2>
        <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
          <IoHomeOutline size={30} />
          <div className="flex gap-3">
            <MdGTranslate size={30} />
            <IoMdClose size={30} />
          </div>
        </div>
        <div className="p-3 bg-violet-600 border-2 border-white">
          <div className="flex justify-around gap-2">
            <div className="bg-white rounded-xl px-2">
              <img
                className="w-32 m-auto"
                src="https://demo.uddoktapay.com/uploads/bank_logo/ibbl.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-base text-center font-semibold text-white">
                টাকার পরিমান{" "}
              </p>
              <div className="bg-white w-full mt-1 py-1 px-20 text-2xl text-center rounded-lg font-bold">
                1000
              </div>
            </div>
          </div>
          <form action="">
            <div className="">
              <p className="text-white mt-4 text-sm text-center font-semibold">
                পেমেন্ট স্ক্রিনশট আপলোড করুন
              </p>
              <input
                type="file"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                required
              />
            </div>
          </form>
          <div className="">
            <p className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600">
              ▪ ব্যাংকের নামঃ{" "}
              <span className="text-yellow-300 text-base">
                Islami Bank Bangladesh App.
              </span>
            </p>
            <div className="flex justify-between items-center gap-2 border-b border-gray-600">
              <p className="text-xs font-semibold text-gray-300 py-2">
                ▪ একাউন্ট নামঃ{" "}
                <span className="text-yellow-300 text-base">Name</span>
              </p>
              <span className="text-white bg-[#0808086c] w-16 justify-center rounded-lg flex items-center gap-1">
                <LuClipboardCopy /> Copy
              </span>
            </div>
            <div className="flex justify-between items-center gap-2 border-b border-gray-600">
              <p className="text-xs font-semibold text-gray-300 py-2">
                ▪ একাউন্ট নম্বরঃ{" "}
                <span className="text-yellow-300 text-base">123456789</span>
              </p>
              <span className="text-white bg-[#0808086c] w-16 justify-center rounded-lg flex items-center gap-1">
                <LuClipboardCopy /> Copy
              </span>
            </div>
            <div className="flex justify-between items-center gap-2 border-b border-gray-600">
              <p className="text-xs font-semibold text-gray-300 py-2">
                ▪ ব্রাঞ্চ নামঃ{" "}
                <span className="text-yellow-300 text-base">Branch</span>
              </p>
              <span className="text-white bg-[#0808086c] w-16 justify-center rounded-lg flex items-center gap-1">
                <LuClipboardCopy /> Copy
              </span>
            </div>
            <div className="flex justify-between items-center gap-2 border-b border-gray-600">
              <p className="text-xs font-semibold text-gray-300 py-2">
                ▪ রাউটিং নম্বরঃ{" "}
                <span className="text-yellow-300 text-base">123456789</span>
              </p>
              <span className="text-white bg-[#0808086c] w-16 justify-center rounded-lg flex items-center gap-1">
                <LuClipboardCopy /> Copy
              </span>
            </div>
            <p className="text-xs font-semibold text-gray-300 py-2">
              ▪ উপরের উল্লেখিত তথ্য অনুযায়ী আপনার ব্যাংক ট্রান্সফার সম্পন্ন
              করুন। তারপর আপলোড বক্সে ব্যাংক স্লিপ অথবা ট্রান্সফার স্ক্রিনশট
              আপলোড করুন এবং নিচের{" "}
              <span className="text-yellow-300 text-base">SUBMIT</span> বাটনে
              ক্লিক করুন।
            </p>
          </div>
        </div>
        <div className="w-40 m-auto pt-3">
          <button className="py-2 px-4 w-full text-xl font-semibold text-white bg-violet-600 hover:bg-violet-700 border border-white rounded-lg duration-300">
            Deposit Now
          </button>
        </div>
      </div>
      {/* Deposit End 04 */}
      {/* Deposit Start 05 */}
      <div className="bg-[#152234] p-4 w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold border-2 border-white text-white bg-red-600 rounded-md">
          MOBILE BANKING
        </h2>
        <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
          <IoHomeOutline size={30} />
          <div className="flex gap-3">
            <MdGTranslate size={30} />
            <IoMdClose size={30} />
          </div>
        </div>
        <div className="p-3 bg-red-600 border-2 border-white">
          <div className="flex justify-around gap-2">
            <div className="bg-white rounded-xl px-2">
              <img
                className="w-32 m-auto"
                src="https://demo.uddoktapay.com/uploads/bank_logo/ibbl.png"
                alt=""
              />
            </div>
            <div className="">
              <div className="flex justify-between gap-2">
                <p className="text-sm mt-4 text-center font-semibold text-white">
                  টাকার পরিমান লিখুন
                </p>
                <div className="">
                  <p className="text-[10px] text-white">Available balance</p>
                  <div className="bg-white mt-1 py-1 px-2 text-sm text-center rounded-lg font-bold">
                    1000 BDT
                  </div>
                </div>
              </div>
              <form action="">
                <input
                  type="Number"
                  className="w-full my-2 px-5 py-2 font-medium bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                  placeholder="টাকার পরিমান লিখুন"
                  required
                />
              </form>
            </div>
          </div>
          <form action="">
            <div className="">
              <p className="text-white mt-4 text-sm font-semibold">User ID :</p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="User ID"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-sm font-semibold">Email :</p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-center text-sm font-semibold">
                রিসিভার একাউন্ট নম্বর লিখুন
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="রিসিভার ব্যাংক একাউন্ট নম্বর লিখুন"
                required
              />
            </div>
            <div className="flex space-x-6">
              {/* Male Option */}
              <div
                className={`flex items-center space-x-2 cursor-pointer border-2 rounded-lg px-4 py-2 ${
                  selectedGender === "male"
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300"
                }`}
                onClick={() => handleGenderSelect("male")}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    selectedGender === "male"
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedGender === "male" && (
                    <svg
                      className="w-3 h-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span>Personal</span>
              </div>

              {/* Female Option */}
              <div
                className={`flex items-center space-x-2 cursor-pointer border-2 rounded-lg px-4 py-2 ${
                  selectedGender === "female"
                    ? "border-pink-500 bg-pink-100"
                    : "border-gray-300"
                }`}
                onClick={() => handleGenderSelect("female")}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    selectedGender === "female"
                      ? "border-pink-500 bg-pink-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedGender === "female" && (
                    <svg
                      className="w-3 h-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span>Agent</span>
              </div>
              {/* Female Option */}
              <div
                className={`flex items-center space-x-2 cursor-pointer border-2 rounded-lg px-4 py-2 ${
                  selectedGender === "female" ? "" : ""
                }`}
                onClick={() => handleGenderSelect("female")}
              >
                <div
                  className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
                    selectedGender === "female" ? "" : ""
                  }`}
                >
                  {selectedGender === "female" && (
                    <svg
                      className="w-3 h-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span>Merchant</span>
              </div>
            </div>
          </form>
          <div className="w-48 m-auto pt-3">
            <button className="py-2 px-4 w-full text-xl font-semibold text-white bg-red-600 hover:bg-red-700 border-2 border-white rounded-lg duration-300">
              Withdraw Now
            </button>
          </div>
        </div>
      </div>
      {/* Deposit End 05 */}
      {/* Deposit Start 06 */}
      <div className="bg-[#152234] p-4 w-[600px] space-y-2">
        <h2 className="p-2 w-full text-center text-lg font-semibold border-2 border-white text-white bg-violet-600 rounded-md">
          WITHDRAW BANK TRANSFER
        </h2>
        <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
          <IoHomeOutline size={30} />
          <div className="flex gap-3">
            <MdGTranslate size={30} />
            <IoMdClose size={30} />
          </div>
        </div>
        <div className="p-3 bg-violet-600 border-2 border-white">
          <div className="flex justify-around gap-2">
            <div className="bg-white rounded-xl px-2">
              <img
                className="w-32 m-auto"
                src="https://demo.uddoktapay.com/uploads/bank_logo/ibbl.png"
                alt=""
              />
            </div>
            <div className="">
              <div className="flex justify-between gap-2">
                <p className="text-sm mt-4 text-center font-semibold text-white">
                  টাকার পরিমান লিখুন
                </p>
                <div className="">
                  <p className="text-[10px] text-white">Available balance</p>
                  <div className="bg-white mt-1 py-1 px-2 text-sm text-center rounded-lg font-bold">
                    1000 BDT
                  </div>
                </div>
              </div>
              <form action="">
                <input
                  type="Number"
                  className="w-full my-2 px-5 py-2 font-medium bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                  placeholder="টাকার পরিমান লিখুন"
                  required
                />
              </form>
            </div>
          </div>
          <form action="">
            <div className="">
              <p className="text-white mt-4 text-sm font-semibold">User ID :</p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="User ID"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-sm font-semibold">Email :</p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-center text-sm font-semibold">
                রিসিভার ব্যাংক একাউন্ট নম্বর লিখুন
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="রিসিভার ব্যাংক একাউন্ট নম্বর লিখুন"
                required
              />
            </div>
            <div className="">
              <p className="text-white text-center text-sm font-semibold">
                একাউন্ট হোল্ডার ফুল নাম
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="একাউন্ট হোল্ডার ফুল নাম "
                required
              />
            </div>
            <div className="">
              <p className="text-white text-center text-sm font-semibold">
                রিসিভ ব্যাংক একাউন্ট ব্রাঞ্চ ঠিকানা
              </p>
              <input
                type="text"
                className="w-full my-2 px-5 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                placeholder="রিসিভ ব্যাংক একাউন্ট ব্রাঞ্চ ঠিকানা"
                required
              />
            </div>
          </form>
          <div className="w-48 m-auto pt-3">
            <button className="py-2 px-4 w-full text-xl font-semibold text-white bg-violet-600 hover:bg-violet-700 border-2 border-white rounded-lg duration-300">
              Withdraw Now
            </button>
          </div>
        </div>
      </div>
      {/* Deposit End 06 */}
    </div>
  );
};

export default Deposit;
