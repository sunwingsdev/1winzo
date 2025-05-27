import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import ApiConnectionModal from "./ApiConnectionModal";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";
import LRVModal from "./modal/LRVModal";

const Games = ({ game }) => {
  const {
    setIsApiModalOpen,
    isLRVModalOpen,
    setIsModalOpen,
    isApiModalOpen,
    setIsLRVModalOpen,
  } = useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const [isHovered, setIsHovered] = useState(false);
  const { addToast } = useToasts();

  const navigate = useNavigate();

  const handleGameOpen = () => {
    if (!user) {
      setIsLRVModalOpen(true);
      addToast("Please login first", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      if (game?.link) {
        navigate(`/games/play/${game._id}`);
      } else {
        setIsApiModalOpen(true);
      }
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
          src={`${import.meta.env.VITE_BASE_API_URL}${game?.image}`}
          className={`w-48 h-28 sm:h-36 rounded-md transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          alt="game image"
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black bg-opacity-50 duration-300">
            <button
              onClick={handleGameOpen}
              // onClick={() => {
              //   console.log("Play button clicked!");
              //   setIsLRVModalOpen(true);
              // }}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded hover:bg-blue-600 duration-300"
            >
              PLAY
            </button>
            {game?.demoLink && (
              <Link
                to={`/games/demo/${game._id}`}
                className="px-4 py-0.5 bg-[#cfd0d16e] text-white text-[10px] font-bold rounded hover:bg-slate-500 duration-300"
              >
                DEMO
              </Link>
            )}

            <button className="absolute top-0 right-0 bg-slate-800 rounded-l-md">
              <FaStar size={26} className="text-slate-500 p-1.5" />
            </button>
          </div>
        )}
      </div>
      <p className="text-xs lg:text-base font-bold text-white capitalize">
        {game?.name}
      </p>

      {/* {isLRVModalOpen && (
        <LRVModal closeLRVModal={() => setIsLRVModalOpen(false)} />
      )}
      {isApiModalOpen && (
        <ApiConnectionModal closeApiModal={() => setIsApiModalOpen(false)} />
      )} */}
    </div>
  );
};

export default Games;
