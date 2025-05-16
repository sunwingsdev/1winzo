import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const MyReportCommon = ({
  heading,
  tabs = [],
  sportRadioOptions = [],
  orderDisplayOptions = [],
  lastSelectOptionsNew = [],
  ofSelectOptionsNew = [],
  autoRefreshOptions = [],

  betStatusOptionsNew = [],
  selectSportsOptions = [],
  selectTimeZoneOptions = [],
  betStatusOptions = [],
  lastSelectOptions = [],
  fromLabel,
  toLabel,
  selectDataOptions = [],
  selectOptions = [],
  userSelectOptions = [],
  quickFilters = [],
  sportTabs = [],
  text,
  matched,
  tableHeaders = [],
  tableBody = [],
  showTimeInput = false,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSportTab, setActiveSportTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState(quickFilters[0] || null);
  const [selectedSport, setSelectedSport] = useState("");

  const handleRadioChange = (e) => {
    setSelectedSport(e.target.value);
  };

  const showOnlyDateSection =
    !selectSportsOptions?.length &&
    !selectTimeZoneOptions?.length &&
    !selectOptions?.length &&
    !userSelectOptions?.length;

  return (
    <div className="  rounded  ">
      {/* Heading */}
      <h2 className=" text-textHeadingColor font-semibold">{heading}</h2>

      {/* Tabs (if provided) */}
      {tabs.length > 0 && (
        <div className="flex gap-1 mt-4 text-xs text-textHeadingColor font-bold border-b-2 border-black">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`py-2 px-4  ${
                activeTab === i
                  ? " border-borderYellowColor  bg-bgHoverYellowColor text-black border "
                  : "bg-gradient-white-to-light  border border-black "
              }`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* sports radio */}
      {sportRadioOptions.length > 0 && (
        <div className="flex flex-wrap gap-4 my-2 text-sm">
          {sportRadioOptions.map((sport, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="sport"
                value={sport}
                checked={selectedSport === sport}
                onChange={handleRadioChange}
                className="accent-blue-500"
              />
              <span>{sport}</span>
            </label>
          ))}
        </div>
      )}

      {/* select data source */}
      <div className="text-xs whitespace-nowrap my-4">
        {selectDataOptions?.length > 0 && (
          <div className="flex items-center gap-2 w-[23%]">
            <label className="text-black  font-medium">Data Source :</label>
            <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded w-full">
              {selectDataOptions.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="bg-bgTableHeader  border-borderTableColor p-3 border-b w-full">
        {/* Dynamic Select Fields */}
        {(orderDisplayOptions?.length > 0 ||
          lastSelectOptionsNew?.length > 0 ||
          ofSelectOptionsNew?.length > 0 ||
          autoRefreshOptions?.length > 0 ||
          betStatusOptionsNew?.length > 0) && (
          <div className="flex gap-2 text-[11px]  w-full whitespace-nowrap">
            {/* Order of Display */}
            {orderDisplayOptions?.length > 0 && (
              <div className="flex items-center gap-1 w-full">
                <label className="text-black w-28  mb-1">
                  Order Display:
                </label>
                <select className="border border-borderTableColor border-opacity-80 px-2 py-1 rounded w-full ">
                  {orderDisplayOptions.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Of */}
            {ofSelectOptionsNew?.length > 0 && (
              <div className="flex items-center gap-1  w-full">
                <label className="text-black w-28 text-right  mb-1">Of</label>
                <select className="border border-borderTableColor border-opacity-80 px-2 py-1 rounded w-full ">
                  {ofSelectOptionsNew.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Last */}
            {lastSelectOptionsNew?.length > 0 && (
              <div className="flex items-center gap-1  w-full">
                <label className="text-black text-right w-28 mb-1">Last</label>
                <select className="border border-borderTableColor border-opacity-80 px-2 py-1 rounded w-full ">
                  {lastSelectOptionsNew.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Auto Refresh */}
            {autoRefreshOptions?.length > 0 && (
              <div className="flex items-center gap-1  w-full">
                <label className="text-black w-28  mb-1">
                  Auto Refresh 
                </label>
                <select className="border border-borderTableColor border-opacity-80 px-2 py-1 rounded w-full ">
                  {autoRefreshOptions.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Bet Status */}
            {betStatusOptionsNew?.length > 0 && (
              <div className="flex items-center gap-1  w-full">
                <label className="text-black w-28 text-center  mb-1">Bet Status</label>
                <select className="border border-borderTableColor border-opacity-80 px-2 py-1 rounded w-full ">
                  {betStatusOptionsNew.map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Date-Time and Filters Section */}
        <div className="flex gap-4 items-center text-xs w-[92%]">
          {/* Bet Status And Last2 */}
          {(betStatusOptions?.length > 0 || lastSelectOptions?.length > 0) && (
            <div className="w-full flex-1 flex items-center gap-2">
              {betStatusOptions?.length > 0 && (
                <div className="text-xs whitespace-nowrap  w-[40%]">
                  <div className="flex items-center gap-2 w-full">
                    <label className="text-black font-bold">Bet Status</label>
                    <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded w-full">
                      {betStatusOptions.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {lastSelectOptions?.length > 0 && (
                <div className="text-xs whitespace-nowrap py-4 w-[40%]">
                  <div className="flex items-center gap-2 w-full">
                    <label className="text-black font-bold">Last</label>
                    <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded w-full">
                      {lastSelectOptions.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* sports and time section */}
          {(selectSportsOptions?.length > 0 ||
            selectTimeZoneOptions?.length > 0) && (
            <div className="w-full flex-1 flex gap-2">
              {/* SportS Select Options */}
              {selectSportsOptions?.length > 0 && (
                <div className="text-xs whitespace-nowrap py-4 w-[78%]">
                  <div className="flex items-center gap-2 w-full">
                    <label className="text-black  font-bold">Sports:</label>
                    <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded w-full">
                      {selectSportsOptions.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {/* Time Zone options */}
              {selectTimeZoneOptions?.length > 0 && (
                <div className="text-xs whitespace-nowrap py-4 w-full">
                  <div className="flex items-center gap-2 w-full">
                    <label className="text-black  font-bold">Time Zone:</label>
                    <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded  w-full">
                      {selectTimeZoneOptions.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* From + To Section */}
          {fromLabel && toLabel && (
            <div
              className={`${
                showOnlyDateSection ? "w-[40%]" : "flex-1 "
              } flex gap-6`}
            >
              {/* From */}
              {fromLabel && (
                <div className="flex items-center gap-2 w-full">
                  <label className="font-bold text-black whitespace-nowrap">
                    {fromLabel}
                  </label>
                  <div className="flex gap-2 w-full">
                    <input
                      type="date"
                      className="border border-borderTableColor border-opacity-80 p-3 rounded w-[70%]"
                    />
                    {showTimeInput && (
                      <div className="border border-borderTableColor border-opacity-80 px-3 py-2 rounded w-[20%] flex items-center  justify-center  text-gray-600">
                        11:59
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* To */}
              {toLabel && (
                <div className="flex items-center gap-2 w-full">
                  <label className="font-bold text-black whitespace-nowrap">
                    {toLabel}
                  </label>
                  <div className="flex gap-2 w-full">
                    <input
                      type="date"
                      className="border border-borderTableColor border-opacity-80 p-3 rounded w-[70%]"
                    />
                    {showTimeInput && (
                      <div className="border border-borderTableColor border-opacity-80 px-3 py-2 rounded w-[20%] flex items-center  justify-center  text-gray-600">
                        11:59
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Select Fields */}
          {(selectOptions?.length > 0 || userSelectOptions?.length > 0) && (
            <div className="flex-1 flex gap-2 w-full">
              {/* Select: Last */}
              {selectOptions?.length > 0 && (
                <div className="flex items-center gap-2 w-[30%]">
                  <label className="text-black font-bold">Last</label>
                  <select className="border border-borderTableColor border-opacity-80 px-3 py-1 rounded w-full">
                    {selectOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Select: User List */}
              {userSelectOptions?.length > 0 && (
                <div className="flex items-center gap-2 w-[30%] whitespace-nowrap">
                  <label className="text-black font-bold">User List</label>
                  <select className="border border-borderTableColor border-opacity-80 p-3 rounded w-full">
                    {userSelectOptions.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Filter Buttons */}
        {quickFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
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

      <div className="my-2 text-sm">
        <p>{text}</p>
      </div>

      {/* Sport Tabs */}
      {sportTabs.length > 0 && (
        <div className="flex gap-2 mt-4 text-xs text-black font-medium ">
          {sportTabs.map((tab, i) => (
            <button
              key={i}
              className={`py-2 px-4 rounded ${
                activeSportTab === i
                  ? "bg-bgYellowColor border-borderYellowColor  hover:bg-bgHoverYellowColor text-black border "
                  : "bg-gradient-white-to-light hover-offwhite-gradient border border-borderTableColor border-opacity-80"
              }`}
              onClick={() => setActiveSportTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Table Section */}
      {matched && (
  <div className="text-sm  text-white font-medium bg-bgMatchedColor">
    <h3 className="px-2 py-[2px]">{matched}</h3>
  </div>
)}
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border">
          <thead className="text-xs whitespace-nowrap border-y  text-textTableHeader bg-bgTableHeader  border-borderTableColor">
            <tr className="">
              {tableHeaders.map((header, i) => (
                <th key={i} className="px-2 py-2 font-normal  text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.length > 0 ? (
              tableBody.map((row) => (
                <tr
                  key={row.key}
                  className={row.key === "row2" ? "bg-white" : ""}
                >
                  {tableHeaders.map((header) => (
                    <td
                      key={header}
                      className={`px-2 p-1 text-xs border-b border-borderTableColor bg-opacity-5 bg-bgBlack text-gray-800 ${
                        header.toLowerCase() === "downline p/l" ||
                        header.toLowerCase() === "upline/total p/l"
                          ? "text-textRedColor"
                          : header.toLowerCase() === "player p/l"
                          ? "text-textGreenColor"
                          : header.toLowerCase() === "comm." &&
                            row.uid === "Total"
                          ? "text-textRedColor"
                          : ""
                      }`}
                    >
                      {row[header.toLowerCase()] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  className="px-2 p-1 text-black text-xs border-b border-borderTableColor"
                >
                  You have no bets in this time period...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-center text-textTableHeader items-center gap-4 mt-4">
          <button className="px-1 py-1 bg-bgTableHeader  rounded border-borderTableColor border border-opacity-30 ">
            <MdKeyboardArrowLeft /> {/* ‹ Less-than arrow */}
          </button>
          <button className="px-1 py-1 bg-bgTableHeader     border rounded border-opacity-30 border-borderTableColor ">
            <MdKeyboardArrowRight /> {/* › Greater-than arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReportCommon;
