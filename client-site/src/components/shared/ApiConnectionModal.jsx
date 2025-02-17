import React from "react";
import { FaTimes } from "react-icons/fa";

const ApiConnectionModal = ({ closeApiModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white bg-[#152234] w-[90%] lg:w-[900px] 2xl:w-[900px] h-[100px] lg:h-[120px] 2xl:h-[200px] rounded-lg shadow-lg overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeApiModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Modal Content */}
        <div className="flex items-center text-center justify-center py-8 text-xl">
          Please contact your developer team to connect API
        </div>
      </div>
    </div>
  );
};

export default ApiConnectionModal;
