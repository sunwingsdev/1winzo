import { LanguageContext } from "@/providers/LanguageContext";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import DepositWithdrawTabs from "./DepositWithdrawTabs";

const DepositWithdrawModal = ({ closeDWModal }) => {
  const { language } = useContext(LanguageContext);

  const handleBackgroundClick = () => {
    closeDWModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 text-white bg-black/5  backdrop-blur-sm flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      {/* Modal container */}
      <div
        className="w-full h-full md:w-[380px] md:h-auto md:rounded-xl md:overflow-hidden md:shadow-lg md:my-auto md:mx-auto bg-bgBlack flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent background click from closing when clicking inside
      >
        {/* Header */}
        <div className="flex items-center  justify-between py-2 px-4 bg-primary-primaryColor">
          <h2 className="text-center w-full font-semibold mt-5">
            {language === "en" ? "My Wallet" : "মাই ওয়ালেট"}
          </h2>
          <button onClick={closeDWModal} className="text-white text-xl">
            <RxCross2 />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1   ">
          <DepositWithdrawTabs />
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawModal;
