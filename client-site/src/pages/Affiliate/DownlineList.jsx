import React, { useState } from "react";
import { FaBars, FaEdit, FaSearch, FaUser } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoPersonAddSharp } from "react-icons/io5";
import { useToasts } from "react-toast-notifications";
import {
  useAddUserMutation,
  useGetUsersQuery,
} from "../../redux/features/allApis/usersApi/usersApi";
import AddPlayerModal from "@/components/Affiliate/DownlineList/AddPlayerModal";
import { useSelector } from "react-redux";
import UserTable from "./UsersTable";

const DownlineList = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: users } = useGetUsersQuery();
  const [showModal, setShowModal] = useState(false);
  const [addUser, { isLoading: addUserLoading }] = useAddUserMutation();
  const { addToast } = useToasts();

  // Determine userType based on role
  const getUserType = (role) => {
    if (!role) return "b2c";

    const b2cRoles = [
      "mother-admin",
      "b2c-admin",
      "super-affiliate",
      "master-affiliate",
      "user",
    ];
    const b2bRoles = [
      "mother-admin",
      "b2b-admin",
      "super-agent",
      "master-agent",
      "user",
    ];

    if (b2cRoles.includes(role)) return "b2c";
    if (b2bRoles.includes(role)) return "b2b";
    return "b2c"; // default
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    userType: getUserType(user?.role),
    commission: "",
    exposureLimit: "",
  });

  // Role definitions
  const allRoles = {
    b2c: [
      { value: "mother-admin", label: "Mother Admin" },
      { value: "b2c-admin", label: "B2C Admin" },
      { value: "super-affiliate", label: "Super Affiliate" },
      { value: "master-affiliate", label: "Master Affiliate" },
      { value: "user", label: "User" },
    ],
    b2b: [
      { value: "mother-admin", label: "Mother Admin" },
      { value: "b2b-admin", label: "B2B Admin" },
      { value: "super-agent", label: "Super Agent" },
      { value: "master-agent", label: "Master Agent" },
      { value: "user", label: "User" },
    ],
  };

  const roleCreationPermissions = {
    "mother-admin": {
      b2c: ["b2c-admin", "super-affiliate", "master-affiliate", "user"],
      b2b: ["b2b-admin", "super-agent", "master-agent", "user"],
    },
    "b2c-admin": {
      b2c: ["super-affiliate"],
    },
    "b2b-admin": {
      b2b: ["super-agent"],
    },
    "super-affiliate": {
      b2c: ["master-affiliate"],
    },
    "super-agent": {
      b2b: ["master-agent"],
    },
    "master-affiliate": {
      b2c: ["user"],
    },
    "master-agent": {
      b2b: ["user"],
    },
  };

  // Get allowed roles for current user
  const getAllowedRoles = () => {
    if (!user?.role) return [];

    const currentRole = user.role;
    const userType = getUserType(currentRole);
    const permissions = roleCreationPermissions[currentRole];

    if (!permissions) return [];

    const allowedRoleValues = permissions[userType] || [];
    return (userType === "b2c" ? allRoles.b2c : allRoles.b2b).filter((role) =>
      allowedRoleValues.includes(role.value)
    );
  };

  const allowedRoles = getAllowedRoles();
  const filteredUsers = users?.filter((u) => u.createdBy === user._id);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Update userType when role changes
      ...(name === "role" && { userType: getUserType(value) }),
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      addToast("Passwords do not match!", { appearance: "error" });
      return;
    }

    try {
      const { confirmPassword, ...rest } = formData;
      const userData = {
        ...rest,
        exposureLimit: Number(formData.exposureLimit),
        commission: Number(formData.commission),
        role: allowedRoles.length === 1 ? allowedRoles[0].value : "",
        parentId:
          user?.role === "b2c-admin" || user?.role === "master-agent"
            ? user?._id
            : user?.role === "super-affiliate" ||
              user?.role === "master-affiliate"
            ? user?.parentId
            : null,
        createdBy: user._id,
      };
      const result = await addUser(userData);
      if (result.error) {
        addToast(result.error.data?.message || "Failed to add player", {
          appearance: "error",
        });
      } else {
        addToast("Player added successfully!", {
          appearance: "success",
          autoDismiss: true,
        });
        setShowModal(false);
        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: allowedRoles.length === 1 ? allowedRoles[0].value : "",
          userType: getUserType(user?.role),
          commission: "",
          exposureLimit: "",
        });
      }
    } catch (error) {
      addToast("An error occurred", { appearance: "error" });
    }
  };

  // Mock balance data
  const balanceItems = [
    { label: "Total Balance", value: "BDT 0.00" },
    { label: "Total Exposure", value: "BDT 0.00" },
    { label: "Total Avail. bal.", value: "BDT 0.00" },
    { label: "Balance", value: "BDT 0.00" },
    { label: "Available Balance", value: "BDT 0.00" },
    { label: "Total Player Balance", value: "BDT 0.00" },
  ];

  return (
    <div className="space-y-6 text-white">
      {/* News banner */}
      <div className="bg-bgBlue flex items-center px-2 py-1 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="mr-1"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
        </svg>
        <span className="font-bold uppercase text-xs">News</span>
      </div>

      <div className="flex flex-col gap-4">
        {/* Top Section */}
        <div className="flex justify-between">
          <div className="flex w-full gap-4">
            {/* Search */}
            <div className="flex items-center border border-gray-400 py-2 bg-white rounded overflow-hidden w-full">
              <span className="px-3 text-gray-400">
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Find members"
                className="flex-1 placeholder:text-xs px-2 py-1 text-black text-xs outline-none"
              />
              <button className="bg-[#FDB72F] mr-1 px-2 py-1 text-black hover:text-white font-medium hover:bg-blue-700 text-xs">
                Search
              </button>
            </div>

            {/* Status select */}
            <div className="flex items-center w-full rounded">
              <span className="text-black px-1 font-semibold text-xs">
                Status
              </span>
              <select className="px-2 py-1 text-black outline-none border rounded-md border-gray-400 w-[60%]">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full justify-end gap-3 items-center">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1 bg-gradient-white-to-light hover-offwhite-gradient rounded border border-borderTableColor border-opacity-80 px-5 py-2 text-black font-semibold text-xs"
            >
              <IoPersonAddSharp className="text-base" />
              {allowedRoles.length === 1
                ? `Add ${
                    allowedRoles[0].label
                      .replace("Admin", "")
                      .replace("Affiliate", "")
                      .replace("Agent", "")
                      .trim() || "Player"
                  }`
                : "Add User"}
            </button>

            <span
              className="bg-gradient-white-to-light hover-offwhite-gradient rounded border border-borderTableColor border-opacity-80 px-[10px] p-2"
              style={{ boxShadow: "inset 0 1px 0 0 #ffffff80" }}
            >
              <TbReload className="text-black font-bold text-base" />
            </span>
          </div>
        </div>
      </div>

      {/* Balance Info */}
      <div className="flex gap-4 bg-white rounded py-1">
        {balanceItems.map((item, index) => (
          <div key={index} className="p-2 border-r w-[20%]">
            <h4 className="text-xs text-gray-400">{item.label}</h4>
            <p className="text-sm text-gray-800 font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <UserTable users={filteredUsers} />

      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        allowedRoles={allowedRoles}
        isLoading={addUserLoading}
      />
    </div>
  );
};

export default DownlineList;
