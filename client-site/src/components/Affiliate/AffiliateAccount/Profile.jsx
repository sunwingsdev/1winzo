import React, { useEffect, useState } from "react";
import { X, Pencil } from "lucide-react";

const Profile = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showReferralModal, setShowReferralModal] = useState(false);

  //  Password modal fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //  Referral code field
  const [referralCode, setReferralCode] = useState("");

  const user = {
    firstName: "John",
    lastName: "Doe",
    timeZone: "GMT+6 (Dhaka)",
    referralCode: "ABC123",
  };

  const info = [
    { key: "first_name", label: "First Name", value: user.firstName },
    { key: "last_name", label: "Last Name", value: user.lastName },
    {
      key: "password",
      label: "Password",
      value: "********",
      isEditable: true,
      onEdit: () => setShowPasswordModal(true),
    },
    { key: "time_zone", label: "Time Zone", value: user.timeZone },
    {
      key: "referral_code",
      label: "Referral Code",
      value: user.referralCode,
      isEditable: true,
      onEdit: () => setShowReferralModal(true),
    },
  ];

  //   useEffect(() => {
  //   console.log('Old:', oldPassword);
  //   console.log('New:', newPassword);
  //   console.log('Confirm:', confirmPassword);
  // }, [oldPassword, newPassword, confirmPassword]);

  // useEffect(() => {
  //     console.log('Referral Code:', user.referralCode);
  //   }, [user.referralCode]);

  return (
    <div className="flex gap-6 i text-xs">
      {/* About You Section */}
      <div className="w-1/2  shadow  rounded">
        <h2 className=" p-2 border-y border-borderTableColor bg-bgTableHeader text-textTableHeader  ">
          About You
        </h2>

        {info.map((item) => (
          <div
            key={item.key}
            className={`${
              item.key === "last_name" || item.key === "time_zone"
                ? "bg-white"
                : "bg-bgBlack bg-opacity-5"
            } flex justify-between items-center border-b border-borderTableColor ${
              item.isEditable ? "" : "gap-4"
            }`}
          >
            <div className="flex gap-2 text-black  p-2 w-full   ">
              <p className="   min-w-[100px]">{item.label}</p>
              <p className=" ">{item.value}</p>
            </div>
            <div className="w-[70%] ">
              {item.isEditable && (
                <button
                  onClick={item.onEdit}
                  className="text-textBlueColor text-sm flex items-center justify-center gap-2 w-fit px-3 py-1 my-4 border border-black font-medium border-opacity-20 
                  "
                  style={{ background: "linear-gradient(180deg, #fff, #eee)" }}
                >
                  Edit <Pencil size={14} />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Optional modals here */}
        {/* {showPasswordModal && (
          <div className="mt-4 text-xs text-red-600">Password Modal Here</div>
        )}
        {showReferralModal && (
          <div className="mt-4 text-xs text-green-600">Referral Modal Here</div>
        )} */}
      </div>

      {/* Contact Details Section */}
      <div className="w-1/2    rounded">
        <h2 className=" p-2 border-y border-borderTableColor  text-textTableHeader bg-bgTableHeader ">
          Contact Details
        </h2>
        <div className="flex gap-2 text-black bg-opacity-5 bg-bgBlack p-2 w-full border-b border-borderTableColor">
          <p className="w-[50%]  ">Primary Number</p>
          <p className=" ">+880123456789</p>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowPasswordModal(false)}
        >
          <div className="flex justify-center items-start mr-8 mt-8">
            <div
              className="bg-[#EEEEEE] w-full max-w-md p-3 rounded shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base text-[#3b5160] font-medium">
                  Change Password
                </h3>
                <button
                  className="bg-bgBlack text-white rounded"
                  onClick={() => setShowPasswordModal(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className=" px-4 text-sm whitespace-nowrap">
                {[
                  {
                    label: "Old Password",
                    value: oldPassword,
                    setter: setOldPassword,
                    placeholder: "Enter Old Password",
                  },
                  {
                    label: "New Password",
                    value: newPassword,
                    setter: setNewPassword,
                    placeholder: "Enter New Password",
                  },
                  {
                    label: "New Password Confirm",
                    value: confirmPassword,
                    setter: setConfirmPassword,
                    placeholder: "Confirm Password",
                  },
                ].map((field, index) => (
                  <div
                    key={index}
                    className="w-full py-1 gap-2 flex items-start "
                  >
                    <p className="w-[50%] text-[#212529] font-medium text-sm text-right">
                      {field.label}
                    </p>
                    <input
                      type="password"
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder={field.placeholder}
                      className="w-[50%] bg-white mt-1 px-3 py-2  rounded-md border border-borderTableColor  text-xs"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  className="mt-6 bg-[#ffcc2f] text-black px-4 py-2 rounded text-xs font-medium border border-[#cb8009]  hover:bg-[#f1b910]"
                  onClick={() => {
                    console.log({
                      oldPassword,
                      newPassword,
                      confirmPassword,
                    });
                    setShowPasswordModal(false);
                  }}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Referral Code Modal */}
      {showReferralModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowReferralModal(false)}
        >
          <div className="flex justify-center items-start mr-8 mt-8">
            <div
              className="bg-[#EEEEEE] w-full max-w-md p-3 rounded shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className=" text-lg text-[#3b5160] font-medium">
                  Update Referral Code
                </h3>
                <button
                className="bg-bgBlack text-white  rounded"
                onClick={() => setShowReferralModal(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className="text-sm mb-4 px-6 p-4">
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Referral Code"
                  className="w-full px-3 py-2 border border-borderTableColor rounded text-sm"
                />
              </div>
              <div className="flex justify-center"> 
                <button
                  className="bg-[#ffcc2f] text-black border-[#cb8009]  hover:bg-[#f1b910] px-4 py-2 rounded text-xs font-medium"
                  onClick={() => {
                    console.log({ referralCode });
                    setShowReferralModal(false);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
