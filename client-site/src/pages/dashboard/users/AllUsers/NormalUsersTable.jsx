import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import moment from "moment";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import TablePagination from "@/components/dashboard/TablePagination";
import { FaBars, FaEdit, FaUser } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";

const NormalUsersTable = () => {
  // const { data: usersData, isLoading, error } = useGetUsersQuery();

  // const [searchQuery, setSearchQuery] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const rowsPerPage = 5;

  // // Filtered users based on search query
  // const filteredUsers = usersData
  //   ?.filter((user) => user.role === "user" && user.userType === "")
  //   ?.filter(
  //     (user) =>
  //       user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       (user.phone &&
  //         user.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
  //       (user.email &&
  //         user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  //   )
  //   ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // const paginatedUsers = filteredUsers?.slice(
  //   (currentPage - 1) * rowsPerPage,
  //   currentPage * rowsPerPage
  // );
  const users = [
    {
      username: "demouser1",
      creditRef: 0.0,
      balance: 0.0,
      exposure: 0.0,
      availBal: 0.0,
      exposureLimit: 100000.0,
      commission: 0.0,
      status: "Active",
    },
    {
      username: "demouser2",
      creditRef: 0.0,
      balance: 0.0,
      exposure: 0.0,
      availBal: 0.0,
      exposureLimit: 100000.0,
      commission: 0.0,
      status: "Active",
    },
    {
      username: "demouser3",
      creditRef: 0.0,
      balance: 0.0,
      exposure: 0.0,
      availBal: 0.0,
      exposureLimit: 100000.0,
      commission: 0.0,
      status: "Active",
    },
  ];
  const [userData] = useState(users);

  return (
    <div className="my-8">
      <div className="bg-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between p-4 mb-2">
        <div className="flex flex-row items-start justify-between w-full mb-4 md:mb-0">
          <h1 className="text-2xl text-white font-bold">Normal Users</h1>
        </div>

        <div className="flex w-full md:w-1/2 gap-4">
          <form className="w-full flex flex-row items-center">
            <input
              type="text"
              placeholder="Type Username / Phone / Email..."
              className="py-2 px-1 w-full outline-none"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white p-3">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {/* {isLoading ? (
          <div className="text-center py-10 text-gray-500">
            Data is loading...
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            Failed to load data.
          </div>
        ) : ( */}
        <table className="w-full border-collapse border border-blue-600 text-center">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Sr No.
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Account
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Credit Ref.
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Balance
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Exposure
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Aval. Bal.
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Exposure Limit
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Commission&apos;s
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Status
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Action
              </th>
              {/* <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Joined At
              </th>
              <th className="px-4 py-2 whitespace-nowrap border border-blue-600">
                Last Login
              </th> */}
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-[#cacaca]"
                } text-black`}
              >
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {index + 1}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-blue-500 border border-blue-600 ">
                  {/* <Link to={`/dashboard/user-profile/${user?._id}`}> */}
                  <div className="flex items-center gap-1">
                    <button className="bg-blue-500 px-2 py-0.5 text-white">
                      CL
                    </button>
                    {user.username}
                  </div>
                  {/* </Link> */}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  <div className="flex items-center justify-center gap-1">
                    {user?.creditRef}
                    <FaEdit className="text-blue-500" />
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {user.balance || 0}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  <button className="bg-red-200 border border-red-300 px-4 py-1">
                    {user.exposure || 0}
                  </button>
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {user.availBal || 0}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {user.exposureLimit || 0}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {user?.commission}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  <button className="px-4 py-1 bg-green-300 border border-green-400">
                    {user.status}
                  </button>
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1">
                      <LuArrowDownUp className="text-gray-400" />
                    </button>
                    <button className="p-1">
                      <FaBars className="text-gray-400" />
                    </button>
                    <Link to={`/dashboard/user-profile/${user?._id}`}>
                      <button className="p-1">
                        <FaUser className="text-gray-400" />
                      </button>
                    </Link>
                  </div>
                </td>
                {/* <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {moment(user.createdAt).format("MMMM Do YYYY, h:mm")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-blue-600">
                  {user.lastLoginAt
                    ? moment(user.lastLoginAt).format("MMMM Do YYYY, h:mm:ss")
                    : "N/A"}
                </td> */}
              </tr>
            ))}
            {/* {paginatedUsers?.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
        {/* // )} */}
        {/* <TablePagination
          currentPage={currentPage}
          totalItems={filteredUsers?.length || 0}
          itemsPerPage={rowsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
      </div>
    </div>
  );
};

export default NormalUsersTable;
