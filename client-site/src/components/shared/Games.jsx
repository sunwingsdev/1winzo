import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import ApiConnectionModal from "./ApiConnectionModal";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";

const Games = ({ img, title }) => {
  const { setIsApiModalOpen, setIsModalOpen, isApiModalOpen } =
    useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const [isHovered, setIsHovered] = useState(false);
  const { addToast } = useToasts();

  const handleGameOpen = () => {
    if (!user) {
      setIsModalOpen(true);
      addToast("Please login first", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      setIsApiModalOpen(true);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center gap-2 lg:gap-4 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-md overflow-hidden duration-300">
        <img
          src={img}
          className={`w-48 h-28 sm:h-36 rounded-md transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          alt="game image"
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black bg-opacity-50 duration-300">
            <button
              onClick={handleGameOpen}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded hover:bg-blue-600 duration-300"
            >
              PLAY
            </button>
            <Link
              to="https://game.aviatrix.bet/?cid=demolanding"
              target="-blank"
              className="px-4 py-0.5 bg-[#cfd0d16e] text-white text-[10px] font-bold rounded hover:bg-slate-500 duration-300"
            >
              DEMO
            </Link>
            <button className="absolute top-0 right-0 bg-slate-800 rounded-l-md">
              <FaStar size={26} className="text-slate-500 p-1.5" />
            </button>
          </div>
        )}
      </div>
      <p className="text-xs lg:text-base font-bold text-white">{title}</p>

      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )}
    </div>
  );
};

export default Games;
