import React from "react";
import { IoClose } from "react-icons/io5";

const AddPlayerModal = ({
  isOpen,
  onClose,
  formData,
  onChange,
  onSubmit,
  allowedRoles,
  isLoading,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="flex justify-center items-start mr-24 mt-7">
        <div
          className="bg-bgModalColor rounded-lg w-full max-w-[410px] p-4 pb-16 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-textHeadingColor font-semibold text-base">
              Add Player
            </h2>
            <button onClick={onClose} className="bg-bgBlack text-white rounded">
              <IoClose size={18} />
            </button>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3 text-sm">
            {[
              { label: "Username", name: "username", placeholder: "user123" },
              {
                label: "Email",
                name: "email",
                placeholder: "player@example.com",
              },
              {
                label: "Password",
                name: "password",
                type: "password",
                placeholder: "••••••••",
              },
              {
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
              },
              {
                label: "Phone",
                name: "phone",
                placeholder: "Ex: 880123456789",
              },
              { label: "Commission", name: "commission", placeholder: "0" },
              {
                label: "Exposure Limit",
                name: "exposureLimit",
                placeholder: "100000",
              },
            ].map(({ label, name, type = "text", placeholder }) => (
              <div
                key={name}
                className="flex items-center justify-between gap-2"
              >
                <label className="text-xs text-[#212529] text-right w-[35%] font-medium">
                  {label}
                </label>
                <input
                  name={name}
                  value={formData[name]}
                  onChange={onChange}
                  type={type}
                  placeholder={placeholder}
                  className="w-[60%] p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            ))}

            {/* Role Select Field */}
            {allowedRoles.length > 0 && (
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs text-[#212529] text-right w-[35%] font-medium">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={onChange}
                  className="w-[60%] p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {allowedRoles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <div
              className={`${
                isLoading
                  ? "bg-gray-400"
                  : "bg-bgYellowColor hover:bg-bgHoverYellowColor"
              } w-[33%] flex justify-center border border-borderYellowColor items-center rounded-md cursor-pointer`}
              onClick={!isLoading ? onSubmit : null}
            >
              <button
                className="text-xs text-black py-[7px] font-medium w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayerModal;
