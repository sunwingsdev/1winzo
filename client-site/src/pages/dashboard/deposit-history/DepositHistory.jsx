import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";
import ReasonModal from "../../../components/dashboard/deposit-history/ReasonModal";
import { useGetDepositsQuery } from "../../../redux/features/allApis/depositsApi/depositsApi";
import { Link } from "react-router";

const DepositHistory = () => {
  const { data: allDeposits, isLoading, isError } = useGetDepositsQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [status, setStatus] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading deposits.</div>;

  const handleStatusClick = (deposit, status) => {
    setSelectedDeposit(deposit);
    setStatus(status);
    setModalOpen(true);
  };

  const handleSubmit = (reason) => {
    console.log(
      `Deposit ID: ${selectedDeposit?._id}, Status: ${status}, Reason: ${reason}`
    );
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#172437] flex flex-row items-center justify-between p-4 mb-2">
        <h1 className="text-2xl text-white font-bold">Deposit History</h1>
        <form className="w-1/2 md:w-1/4 flex flex-row items-center">
          <input
            type="text"
            placeholder="Type Account User Name or Account Number..."
            className="py-2 px-1 w-full outline-none"
          />
          <button className="bg-white p-3">
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Deposit Method</th>
              <th className="px-4 py-2">Sender Inputs</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Slip</th>
              <th className="px-4 py-2">Time & Date</th>
              <th className="px-4 py-2">Status</th>
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
                  <td className="px-4 py-4 inline-flex">
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
                              src={`${
                                import.meta.env.VITE_BASE_API_URL
                              }${value}`}
                              alt="Deposit Screenshot"
                              className="w-full h-24 object-cover rounded"
                            />
                          </Link>
                        );
                      }
                      return (
                        <span
                          key={key}
                          className="font-bold capitalize inline-flex"
                        >
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
                        className="px-4 py-2 text-center"
                      >
                        <IoCloudUploadOutline className="text-2xl cursor-pointer" />
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
      <ReasonModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        status={status}
        deposit={selectedDeposit}
      />
    </div>
  );
};

export default DepositHistory;
