import React, { useState } from "react";
import { X } from "lucide-react";

const AddBanks = () => {
  const [banks, setBanks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [formData, setFormData] = useState({
    type: "deposit",
    bankName: "",
    accountName: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddOrUpdate = () => {
    const newBank = {
      ...formData,
      createdAt: new Date().toLocaleString(),
      isActive: true,
    };

    if (editIndex !== null) {
      const updated = [...banks];
      updated[editIndex] = newBank;
      setBanks(updated);
      setEditIndex(null);
    } else {
      setBanks([...banks, newBank]);
    }

    setFormData({
      type: "deposit",
      bankName: "",
      accountName: "",
      accountNumber: "",
    });
    setShowModal(false);
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updated = [...banks];
      updated.splice(deleteIndex, 1);
      setBanks(updated);
      setDeleteIndex(null);
    }
    setShowDeleteModal(false);
  };

  const toggleActive = (index) => {
    const updated = [...banks];
    updated[index].isActive = !updated[index].isActive;
    setBanks(updated);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-2">
        <p className="text-textHeadingColor font-semibold">Banks</p>
        <button
          className="bg-[#0d6efd] hover:bg-[#0363f3] text-white px-2 py-2 rounded-md"
          onClick={() => {
            setFormData({
              type: "deposit",
              bankName: "",
              accountName: "",
              accountNumber: "",
            });
            setEditIndex(null);
            setShowModal(true);
          }}
        >
          + Add Bank
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader  border-borderTableColor ">
            <tr>
              {[
                "Sr no.",
                "Bank Name",
                "Category",
                "Account Name",
                "Account Number",
                "Created Date",
                "Action",
                "ON/OFF",
              ].map((header) => (
                <th key={header} className="px-3 font-normal py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {banks.length > 0 ? (
              banks.map((bank, i) => (
                <tr
                  key={i}
                  className={`border-t text-black border-b border-borderTableColor ${
                    i % 2 === 0 ? "bg-opacity-5 bg-bgBlack" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-2">{i + 1}</td>
                  <td className="px-3 py-2">{bank.bankName}</td>
                  <td className="px-3 py-2">{bank.type}</td>
                  <td className="px-3 py-2">{bank.accountName}</td>
                  <td className="px-3 py-2">
                    {bank.type === "deposit" ? bank.accountNumber : "-"}
                  </td>
                  <td className="px-3 py-2">{bank.createdAt}</td>
                  <td className="px-3 py-2 space-x-2">
                    <button
                      onClick={() => {
                        setEditIndex(i);
                        setFormData(bank);
                        setShowModal(true);
                      }}
                      className="bg-[#008000] text-white p-2  text-base rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setDeleteIndex(i);
                        setShowDeleteModal(true);
                      }}
                      className="bg-bgRed text-white px-2 py-2 rounded-md text-base"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-3 py-2">
                    <label className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        checked={bank.isActive}
                        onChange={() => toggleActive(i)}
                        className="sr-only peer"
                      />
                      <div className="w-full h-full bg-white rounded-full border border-[#2196f3] peer-checked:bg-[#2196f3] transition-colors duration-300"></div>
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-[#4599de] peer-checked:bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </label>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                colSpan="11"
                className="px-2 p-1 text-gray-800 bg-opacity-5 bg-bgBlack text-xs border-b border-borderTableColor "
              >
                You have no bets in this time period.
              </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60"
          onClick={() => setShowModal(false)}
        >
          <div className="flex justify-center items-start mr-24 mt-7">
            <div
              className="bg-bgModalColor p-4 rounded-lg max-w-[410px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-textHeadingColor font-semibold text-base">
                  {editIndex !== null ? "Edit Bank" : "Add Bank"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-bgBlack text-white rounded"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 space-y-4 text-[#212529]">
                {/* Bank Type */}
                <div className="flex items-base justify-between">
                  <label className="text-xs  text-right w-[35%] font-medium">
                    Bank Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-[60%] p-2 text-xs  font-medium border border-borderTableColor border-opacity-80 rounded"
                  >
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                  </select>
                </div>

                {/* Bank Name */}
                <div className="flex  justify-between">
                  <label className="text-xs text-right w-[35%] font-medium">
                    Bank Name
                  </label>
                  <input
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    placeholder="Enter Bank Name"
                    className="w-[60%] p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded"
                  />
                </div>

                {/* Account Name */}
                <div className="flex  justify-between">
                  <label className="text-xs text-right w-[35%] font-medium">
                    Account Name
                  </label>
                  <input
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    placeholder="Enter Account Name"
                    className="w-[60%] p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded"
                  />
                </div>

                {/* Account Number (only if deposit) */}
                {formData.type === "deposit" && (
                  <div className="flex  justify-between">
                    <label className="text-xs text-right w-[35%] font-medium">
                      Account Number
                    </label>
                    <input
                      type="number"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      placeholder="Enter Account Number"
                      className="w-[60%] p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded"
                    />
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center">
                  <div
                    className="bg-bgYellowColor hover:bg-bgHoverYellowColor w-[33%] flex justify-center border border-borderYellowColor items-center rounded-md cursor-pointer"
                    onClick={handleAddOrUpdate}
                  >
                    <button className="text-xs py-[7px] font-medium w-full">
                      {editIndex !== null ? "Update" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}

      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50  bg-black bg-opacity-60"
          onClick={() => setShowDeleteModal(false)}
        >
          <div className="flex justify-center items-start mr-24 mt-7">
            <div
              className="bg-bgModalColor p-4 rounded-lg w-[90%] max-w-[410px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-textHeadingColor font-semibold">Delete</h2>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-black text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex gap-1 px-4">
                <label className="block mb-2 text-sm font-medium text-black">
                  Remark:
                </label>
                <textarea
                  className="w-[80%] border border-borderTableColor border-opacity-80 rounded  mb-4"
                  rows="3"
                />
              </div>

              <div className="flex justify-center text-[#212529] mb-6 font-medium">
                <p>Are you sure to delete this banner?</p>
              </div>

              <div className="flex justify-center text-xs space-x-2">
                <button
                  onClick={handleDelete}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Confirm
                </button>

                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBanks;
