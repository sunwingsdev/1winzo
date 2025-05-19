import React, { useState } from "react";
import { X } from "lucide-react";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password change data:", formData);
    onClose();
    setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 inset-0 z-50  bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div className="flex justify-center items-start mr-24 mt-7">
        <div
          className="bg-bgModalColor rounded-lg max-w-[450px] w-full p-6 shadow-lg relative "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-textHeadingColor font-semibold">
              Change Password
            </h3>
            <button
              onClick={onClose}
              className="bg-black text-white"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 text-xs px-4">
            <div className="flex items-base justify-between gap-2">
              <label
                className="text-right w-[45%] font-medium"
                htmlFor="oldPassword"
              >
                Old Password
              </label>
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                placeholder="Enter Old Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
                required
                className="w-[50%] p-2 py-[11px] text-xs  font-medium border border-borderTableColor border-opacity-80 rounded"
              />
            </div>
            <div className="flex items-base justify-between gap-2">
              <label
                className="text-right w-[45%] font-medium"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
                className="w-[50%] p-2 py-[11px] text-xs  font-medium border border-borderTableColor border-opacity-80 rounded"
              />
            </div>
            <div className="flex items-base justify-between gap-2">
              <label
                className="text-right w-[45%] font-medium"
                htmlFor="confirmPassword"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-[50%] p-2 py-[11px] text-xs  font-medium border border-borderTableColor border-opacity-80 rounded"
              />
            </div>

            <div className="flex justify-center">
              <div className="bg-bgYellowColor hover:bg-bgHoverYellowColor w-[20%] flex justify-center border border-borderYellowColor items-center rounded-md cursor-pointer">
                <button className="text-xs py-[7px] font-medium w-full">
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
