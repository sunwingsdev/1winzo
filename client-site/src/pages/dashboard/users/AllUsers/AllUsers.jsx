import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import moment from "moment";
import {
  useAddUserMutation,
  useGetUsersQuery,
} from "@/redux/features/allApis/usersApi/usersApi";
import TablePagination from "@/components/dashboard/TablePagination";
import Modal from "@/components/betjili/shared/Modal";
import { useToasts } from "react-toast-notifications";
import B2bUsersTable from "./B2bUsersTable";
import B2cUsersTable from "./B2cUsersTable";
import NormalUsersTable from "./NormalUsersTable";

const AllUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { addToast } = useToasts();

  const rolesByType = {
    b2c: ["admin", "super-affiliate", "master-affiliate", "user"],
    b2b: ["admin", "super-agent", "master-agent", "user"],
  };

  const [addUser, { isLoading: addUserLoading }] = useAddUserMutation();

  const { data: usersData, isLoading, error } = useGetUsersQuery();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filtered users based on search query
  const filteredUsers = usersData
    ?.filter(
      (user) =>
        user.role !== "admin" &&
        user.role !== "cashagent" &&
        user.role !== "affiliate"
    )
    ?.filter(
      (user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.phone &&
          user.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email &&
          user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const paginatedUsers = filteredUsers?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !username ||
      !userType ||
      !role ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      addToast("Please fill in all required fields.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      username,
      userType,
      role,
      email,
      phone,
      password,
    };

    try {
      const res = await addUser(newUser).unwrap();
      addToast("User created successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
      // Clear form
      setFirstName("");
      setLastName("");
      setUsername("");
      setUserType("");
      setRole("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      setIsModalOpen(false);
    } catch (err) {
      console.error("Failed to add user:", err);
      addToast("Failed to create user. Please try again.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">All Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded block"
          >
            Add Role
          </button>
        </div>

        {/* <div className="flex w-1/2 gap-4">
          <form className="md:w-3/4 hidden md:flex flex-row items-center">
            <input
              type="text"
              placeholder="Type Username / Phone / Email..."
              className="py-2 px-1 w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded md:w-1/4 hidden md:block"
          >
            Add Role
          </button>
        </div> */}

        {/* <form className="w-full flex flex-row items-center md:hidden">
          <input
            type="text"
            placeholder="Type Username or Phone Number or Email..."
            className="py-2 px-1 w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form> */}
      </div>

      {/* Table */}
      {/* <div className="overflow-x-auto">
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">
            Data is loading...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            Failed to load data.
          </div>
        ) : (
          <table className="w-full border-collapse border border-blue-600 text-center">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Username
                </th>
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Phone
                </th>
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Email
                </th>
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Joined At
                </th>
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Last Login
                </th>
                <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers?.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                  } text-black`}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-blue-500 hover:text-blue-600 border border-blue-600 hover:underline transition-all ease-in-out duration-300">
                    <Link to={`/dashboard/user-profile/${user?._id}`}>
                      {user.username}
                    </Link>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    {user.phone}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    {user.email || "N/A"}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    {moment(user.createdAt).format("MMMM Do YYYY, h:mm")}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    {user.lastLoginAt
                      ? moment(user.lastLoginAt).format("MMMM Do YYYY, h:mm:ss")
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                    {user.balance || 0}
                  </td>
                </tr>
              ))}
              {paginatedUsers?.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        <TablePagination
          currentPage={currentPage}
          totalItems={filteredUsers?.length || 0}
          itemsPerPage={rowsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div> */}

      <NormalUsersTable />
      <B2bUsersTable />
      <B2cUsersTable />

      <Modal
        title="Create User with Role"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-center gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              User Type
            </label>
            <select
              name="userType"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
                setRole(""); // Reset role when type changes
              }}
            >
              <option value="">Select Type</option>
              <option value="b2c">B2C</option>
              <option value="b2b">B2B</option>
            </select>
          </div>
          {userType && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Role
              </label>
              <select
                name="role"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                {rolesByType[userType].map((roleOption) => (
                  <option key={roleOption} value={roleOption}>
                    {roleOption
                      .replaceAll("_", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-300"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-600 my-2 font-semibold italic">
              **{errorMessage}**
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-4 rounded-md"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md w-full disabled:opacity-50"
              disabled={addUserLoading}
            >
              {addUserLoading ? "Creating..." : "Create User"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AllUsers;
