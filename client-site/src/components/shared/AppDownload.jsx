import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AppDownload = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="bg-white p-3 flex items-center justify-between gap-2">
        <IoClose
          className="text-gray-500 cursor-pointer"
          size={35}
          onClick={() => setIsVisible(false)}
        />
        <p className="text-black text-sm">
          এখনই আমাদের APP সংস্করণ <br />
          ডাউনলোড করুন।
        </p>
        <button className="text-white text-sm font-bold uppercase px-4 py-2 bg-[#0abab4]">
          Download
        </button>
      </div>
    )
  );
};

export default AppDownload;
