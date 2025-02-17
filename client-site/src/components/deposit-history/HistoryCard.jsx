import { TfiReload } from "react-icons/tfi";
const HistoryCard = ({ status, amount }) => {
  return (
    <div className="bg-[#172437] p-2 rounded-md flex flex-col items-start gap-4 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-blue-500">22/12/2024 09:00 AM</p>
        {status === "pending" ? (
          <button className="px-4 py-1 font-bold text-white bg-yellow-600 rounded-md uppercase">
            Pending
          </button>
        ) : status === "rejected" ? (
          <button className="px-4 py-1 font-bold text-white bg-red-600 rounded-md uppercase">
            Rejected
          </button>
        ) : status === "approved" ? (
          <button className="px-4 py-1 font-bold text-white bg-green-600 rounded-md uppercase">
            Approved
          </button>
        ) : (
          <button className="px-4 py-1 font-bold text-white bg-gray-600 rounded-md uppercase">
            Unknown
          </button>
        )}
      </div>
      <p className="text-3xl text-white font-bold">{amount} BDT</p>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-slate-500">
          Rocket, thdfdsdvwwcscaslascaswsaasccddvvdvj
        </p>
        <button className="p-2 font-bold text-white bg-[#091222] rounded-md uppercase">
          <TfiReload className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
