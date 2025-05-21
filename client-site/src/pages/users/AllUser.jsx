import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  useAddUserMutation,
  useGetUsersQuery,
} from "../../redux/features/allApis/usersApi/usersApi";
import DynamicTable from "../../components/shared/tables/DynamicTable";
import Modal from "@/components/betjili/shared/Modal/Modal";
import { useToasts } from "react-toast-notifications";

const AllUsers = () => {
  const { user } = useSelector((state) => state.auth);
  const [addUser, { isLoading: addUserLoading }] = useAddUserMutation();
  const { data, isLoading } = useGetUsersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("b2c");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    userType: "b2c",
  });
  const { addToast } = useToasts();

  const columns = [
    { headerName: "Username", field: "username" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Refer Code", field: "refer" },
    {
      headerName: "Joined At",
      field: "createdAt",
      customRender: (row) =>
        moment(row.createdAt).format("DD/MM/YYYY, h:mm:ss a"),
    },
    { headerName: "Balance", field: "balance" },
    { headerName: "User Type", field: "userType" },
  ];

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
    "super-affiliated": {
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

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      userType: activeTab,
      role: "",
    }));
  }, [activeTab]);

  const getAllowedRoles = () => {
    if (!user?.role) return [];

    const currentRole = user.role;
    const permissions = roleCreationPermissions[currentRole];

    if (!permissions) return [];

    const allowedRoleValues = permissions[activeTab] || [];

    return (activeTab === "b2c" ? allRoles.b2c : allRoles.b2b).filter((role) =>
      allowedRoleValues.includes(role.value)
    );
  };

  const allowedRoles = getAllowedRoles();

  if (allowedRoles.length === 1 && formData.role !== allowedRoles[0].value) {
    setFormData({
      ...formData,
      role: allowedRoles[0].value,
      userType: user.role.includes("b2c") ? "b2c" : "b2b",
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      addToast("Passwords do not match!", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const { confirmPassword, ...rest } = formData;
    const userData = {
      ...rest,
      userType: activeTab,
      parentId:
        user?.role === "mother-admin" ? null : user?.parentId || user._id,
      createdBy: user._id,
    };

    try {
      const result = await addUser(userData);
      if (result.error) {
        addToast("Failed to register!", {
          appearance: "error",
          autoDismiss: true,
        });
      } else if (result.data.insertedId) {
        addToast("Registration successful!", {
          appearance: "success",
          autoDismiss: true,
        });
        setIsModalOpen(false);
        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: allowedRoles.length === 1 ? allowedRoles[0].value : "",
          userType: activeTab,
        });
      }
    } catch (error) {
      addToast("An error occurred!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const showTabs = user?.role === "mother-admin";

  return (
    <div>
      <h1 className="text-center text-xl lg:text-2xl bg-[#14815f] text-white p-2 lg:font-semibold rounded-md">
        All Users
      </h1>
      <div className="flex justify-between py-2">
        <input
          className="border-2 border-zinc-500 rounded w-3/5 md:w-1/3 px-3 py-1.5 md:px-4 md:py-2"
          placeholder="Search here"
          type="text"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-base lg:text-xl font-bold bg-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-500 transition-colors"
          disabled={!user?.role || allowedRoles.length === 0}
        >
          +Add
        </button>
      </div>
      <DynamicTable columns={columns} data={data} loading={isLoading} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="px-6 py-4 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Register New User
          </h2>

          {showTabs && (
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`py-2 px-4 font-medium  focus:outline-none ${
                  activeTab === "b2c"
                    ? "text-[#14815f] border-b-2 border-[#14815f] font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("b2c")}
              >
                B2C Registration
              </button>
              <button
                className={`py-2 px-4 font-medium  focus:outline-none ${
                  activeTab === "b2b"
                    ? "text-[#14815f] border-b-2 border-[#14815f] font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("b2b")}
              >
                B2B Registration
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                {allowedRoles.length === 1 ? (
                  <input
                    type="text"
                    value={allowedRoles[0].label}
                    className="w-full px-3 py-1 border border-gray-300 rounded bg-gray-100"
                    readOnly
                  />
                ) : (
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                    required
                  >
                    <option value="">Select Role</option>
                    {allowedRoles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#14815f] focus:border-transparent"
                  required
                />
              </div>

              <input type="hidden" name="userType" value={formData.userType} />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-[#14815f] rounded-md hover:bg-[#0e6a4d] focus:outline-none focus:ring-2 focus:ring-[#14815f]"
                disabled={allowedRoles.length === 0 || addUserLoading}
              >
                {addUserLoading ? "Registering..." : "Register User"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AllUsers;
