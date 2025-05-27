const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader border-borderTableColor">
          <tr>
            {[
              "Sr .No.",
              "Username",
              "Email",
              "Phone",
              "Commission",
              "Exposure Limit",
              "Created At",
              "Status",
              "Action",
            ].map((header, idx) => (
              <th key={idx} className="px-2 py-2 font-normal text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users?.map((user, index) => (
              <tr
                key={user._id}
                className="border-b bg-opacity-5 bg-bgBlack border-borderTableColor"
              >
                <td className="px-2 py-3">{index + 1}</td>
                <td className="px-2 py-3">{user.username}</td>
                <td className="px-2 py-3">{user.email}</td>
                <td className="px-2 py-3">{user.phone}</td>
                <td className="px-2 py-3">
                  {" "}
                  {user?.commission ? `${user?.commission} %` : "--"}
                </td>
                <td className="px-2 py-3">
                  {user?.exposureLimit ? `BDT ${user.exposureLimit}` : "--"}
                </td>
                <td className="px-2 py-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-2 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "approve"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <button className="text-blue-400 hover:text-blue-600 text-xs">
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                className="px-2 p-1 text-gray-800 text-xs border-b bg-opacity-5 bg-bgBlack border-borderTableColor"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
