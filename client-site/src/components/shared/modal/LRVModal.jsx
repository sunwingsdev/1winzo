import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "@/providers/AuthProvider";

const LRVModal = () => {
  const { isLRVModalOpen, setIsLRVModalOpen, setIsModalOpen } =
    useContext(AuthContext);

  if (!isLRVModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white bg-[#152234] w-[90%] lg:w-[900px] h-auto rounded-lg shadow-lg flex overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={() => setIsLRVModalOpen(false)}
          className="absolute top-4 right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <IoClose />
        </button>

        {/* Left Section - Video */}
        <div className="w-1/2 lg:block hidden">
          <iframe
            className="w-full h-full object-cover rounded-l-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Section - Login & Register */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">Welcome</h2>

          <p className="text-[#59647a] mb-4">
            Please login or register to continue.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform active:scale-95"
              onClick={() => {
                setIsLRVModalOpen(false);
                setIsModalOpen(true);
              }}
            >
              Login
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-transform active:scale-95"
              onClick={() => {
                setIsLRVModalOpen(false);
                setIsModalOpen(true);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LRVModal;
