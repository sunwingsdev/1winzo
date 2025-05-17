import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const AffMessForUsers = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [selectedSavedMsg, setSelectedSavedMsg] = useState("");

  const handleSave = () => {
    console.log("Saved Message Data:");
    console.log("Title:", title);
    console.log("Date:", date);
    console.log("Message:", message);
    console.log("Type:", type);
  };

  const handleAction = () => {
    console.log("Selected Saved Message:", selectedSavedMsg);
  };

  return (
    <div className=" text-sm">
      <div className="space-y-2 bg-[#E0E6E6] p-2 border-b border-borderTableColor">
        <h3 className=" font-semibold text-base text-gray-800">
          Set Message For Users
        </h3>

        {/* Title & Date */}
        <div className="flex  w-[50%] gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[50%] py-2 border border-borderTableColor border-opacity-80 rounded px-1 focus:outline-none  focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border  w-[50%] border-borderTableColor border-opacity-80 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[50%]  border border-borderTableColor border-opacity-80 rounded px-1 py-1 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        {/* Select Message Type */}
        <div className="w-[50%]">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-borderTableColor border-opacity-80 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>
              Please Select Type
            </option>
            <option value="all">All</option>
            <option value="downline">Downline</option>
            <option value="user">User</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-[10%] bg-bgYellowColor text-black border-borderYellowColor border text-xs font-medium py-2 rounded hover:bg-bgHoverYellowColor transition"
        >
          Save Message
        </button>
      </div>
      <hr className="my-2" />

      {/* Message List Section */}
      <div className=" px-4 rounded-lg shadow-inner space-y-4">
        <div className="flex gap-6  items-center ">
          <h4 className=" font-semibold text-black">Message List:</h4>
          <div className="w-[25%]">

          
          <select
            value={selectedSavedMsg}
            onChange={(e) => setSelectedSavedMsg(e.target.value)}
            className="w-full border border-borderTableColor border-opacity-80 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Action
            </option>
            
            <option value="1">Lock Message</option>
            <option value="2">Open Message</option>
            <option value="3">Delete Message</option>
          </select>
          </div>

          <button
            onClick={handleAction}
            className="bg-bgYellowColor border border-borderYellowColor text-xs font-medium px-4 py-2 rounded hover:bg-bgHoverYellowColor text-black transition"
          >
             Action
          </button>
        </div>
      </div>
<hr className="my-3" />
      {/* table */}
      {/* Table */}
            <div className="overflow-x-auto ">
              <table className="min-w-full  text-sm text-white">
                <thead className=" text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor">
                  <tr className="">
                    {[
                      "S.No.",
                      "Msg ID",
                      "Domain",
                      "Msg Type",
                      "Msg Title",
                      "Msg Date",
                      "IsLock",
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
                      colSpan="11"
                      className="px-2 p-1 text-gray-800 bg-white text-xs border-b border-borderTableColor "
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

export default AffMessForUsers;
