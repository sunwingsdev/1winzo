import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import ReasonModal from "../../../components/dashboard/deposit-history/ReasonModal";
import { useGetDepositsQuery } from "../../../redux/features/allApis/depositsApi/depositsApi";
import { Link } from "react-router";

const WithdrawHistory = () => {
  const { data: allDeposits, isLoading, isError } = useGetDepositsQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [status, setStatus] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading withdrawals.</div>;

  const handleStatusClick = (deposit, status) => {
    setSelectedDeposit(deposit);
    setStatus(status);
    setModalOpen(true);
  };

  const handleSubmit = (reason) => {
    console.log(`Status: ${status}, Reason: ${reason}`);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#172437] flex flex-row items-center justify-between p-4 mb-2">
        <h1 className="text-2xl text-white font-bold">Withdraw History</h1>
        <form className="w-1/2 md:w-1/4 flex flex-row items-center">
          <input
            type="text"
            placeholder="Type Name or Receiver A/C Number..."
            className="py-2 px-1 w-full outline-none"
          />

          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#172437] dark:bg-[#172437] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Withdraw Method
              </th>
              <th scope="col" className="px-6 py-3">
                Receiver A/C Number
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Time & Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {allDeposits?.map((deposit, index) =>
              deposit?.paymentInputs?.map((input, inputIndex) => (
                <tr
                  key={`${deposit?._id}-${inputIndex}`}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } text-black`}
                >
                  {inputIndex === 0 && (
                    <>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-4 py-2 font-medium"
                      >
                        {deposit?.userInfo?.name || "N/A"}
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-4 py-2"
                      >
                        {deposit?.method || "N/A"}
                      </td>
                    </>
                  )}
                  <td className="px-4 py-2">
                    {Object.entries(input || {}).map(([key, value]) => {
                      const isImage =
                        typeof value === "string" &&
                        /\.(jpg|jpeg|png|gif)$/i.test(value);

                      if (isImage) {
                        return (
                          <Link
                            target="_blank"
                            rel="noreferrer noopener"
                            to={`${import.meta.env.VITE_BASE_API_URL}${value}`}
                            key={key}
                          >
                            <img
                              src={`${import.meta.env.VITE_BASE_API_URL}${
                                deposit?.screenshot
                              }`}
                              alt="Deposit Screenshot"
                              className="w-20 h-20 object-cover rounded-md"
                            />
                          </Link>
                        );
                      }
                      return (
                        <span key={key} className="block">
                          {key}: {value || "N/A"}
                        </span>
                      );
                    })}
                  </td>

                  {inputIndex === 0 && (
                    <>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-4 py-2"
                      >
                        {deposit?.amount || "N/A"}
                      </td>

                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-4 py-2"
                      >
                        {deposit?.createdAt
                          ? new Date(deposit.createdAt).toLocaleString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )
                          : "N/A"}
                      </td>
                      <td
                        rowSpan={deposit?.paymentInputs?.length || 1}
                        className="px-4 py-2 text-center"
                      >
                        {deposit?.status === "pending" ? (
                          <div className="flex flex-col gap-2">
                            <button
                              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                              onClick={() =>
                                handleStatusClick(deposit, "completed")
                              }
                            >
                              Complete
                            </button>
                            <button
                              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                              onClick={() =>
                                handleStatusClick(deposit, "reject")
                              }
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span
                            className={`rounded-full px-3 py-1 text-white capitalize ${
                              deposit?.status === "completed"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          >
                            {deposit?.status}
                          </span>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
            {allDeposits?.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No deposits found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Reason Modal */}
      <ReasonModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  );
};

export default WithdrawHistory;
