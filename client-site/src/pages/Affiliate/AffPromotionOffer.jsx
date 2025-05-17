import React, { useState } from "react";

const AffPromotionOffer = () => {
  const [selectedOffer, setSelectedOffer] = useState("default");
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    midDepositAmount: "",
    turnoverPercentage: "",
    bonusPercentage: "",
    bonusTurnover: "",
    fromDate: "",
    toDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, selectedOffer, isActive });
  };

  return (
    <div className="mx-auto bg-[#E0E6E6] shadow rounded py-6 p-2">
      

      <form onSubmit={handleSubmit} className="space-y-4 text-xs ">
        {/* Select + Input Row */}
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex ">
            <label className="flex items-center gap-2  font-semibold">
              Promotional Offer
              <select
                value={selectedOffer}
                onChange={(e) => setSelectedOffer(e.target.value)}
                className="flex-1 border   border-borderTableColor border-opacity-80 rounded px-3 py-2"
              >
                <option value="default" disabled>
                  Select Offer
                </option>
                <option value="alltime">Alltime Deposit Bonus</option>
              </select>
            </label>
          </div>

          {selectedOffer === "alltime" && (
            <>
              <div className="flex">
                <label className="flex items-center gap-2  font-semibold">
                  Mid Deposit Amount
                  <input
                    type="number"
                    name="midDepositAmount"
                    placeholder="Enter Mid Deposit Amount"
                    value={formData.midDepositAmount}
                    onChange={handleChange}
                    className="flex-1 border border-borderTableColor border-opacity-80 rounded px-3 py-2"
                  />
                </label>
              </div>
              <div className="">
                <label className="flex items-center gap-2  font-semibold">
                  Turnover (%)
                  <input
                    type="number"
                    name="turnoverPercentage"
                    placeholder="Enter Turnover"
                    value={formData.turnoverPercentage}
                    onChange={handleChange}
                    className="flex-1 border border-borderTableColor border-opacity-80 rounded px-3 py-2"
                  />
                </label>
              </div>
              <div className="flex w-[20%]">
                <label className="flex items-center gap-2  font-semibold">
                  Bonus(%) 
                  <input
                    type="number"
                    name="bonusPercentage"
                    placeholder="Enter Bonus"
                    value={formData.bonusPercentage}
                    onChange={handleChange}
                    className="flex-1 border border-borderTableColor border-opacity-80 rounded px-3 py-2"
                  />
                </label>
              </div>
            </>
          )}
        </div>

        {/* Bottom Fields */}
        {selectedOffer === "alltime" && (
          <>
            <div className="flex gap-4 flex-wrap">
              <div className="w-[26%] flex items-center gap-2">
                <label className="   font-semibold">
                  Bonus Turnover(%)
                  </label>
                  <input
                    type="number"
                    name="bonusTurnover"
                    placeholder="Enter Bonus Turnover"
                    value={formData.bonusTurnover}
                    onChange={handleChange}
                    className=" border w-[50%] border-borderTableColor border-opacity-80 rounded p-3"
                  />
                
              </div>
              <div className="">
                <label className="flex items-center gap-2  font-semibold">
                  From
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    className="flex-1 border border-borderTableColor border-opacity-80 rounded p-3"
                  />
                </label>
              </div>
              <div className="">
                <label className="flex items-center gap-2  font-semibold">
                  To
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    className="flex-1 border border-borderTableColor border-opacity-80 rounded p-3"
                  />
                </label>
              </div>

              {/* Switch */}
              <div className="flex items-center gap-4 mt-2">
                <span className="font-semibold">ON/OFF</span>
                <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        
                        className="sr-only peer"
                      />
                      <div className="w-full h-full bg-white rounded-full border border-[#2196f3] peer-checked:bg-[#2196f3] transition-colors duration-300"></div>
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-[#4599de] peer-checked:bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="w-[6%] text-sm">

        
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-[#0D6EFD] text-white py-2  hover:bg-blue-700 transition"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default AffPromotionOffer;
