import { BsGridFill, BsSuitClubFill } from "react-icons/bs";
import { PiCrownFill } from "react-icons/pi";
import { FaGift } from "react-icons/fa6";
import { GiFeatherWound, GiFemaleVampire } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useToasts } from "react-toast-notifications";
import ApiConnectionModal from "../../shared/ApiConnectionModal";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const { setIsApiModalOpen, setIsModalOpen, isApiModalOpen } =
    useContext(AuthContext);
  const { user } = useSelector((state) => state.auth);
  const { addToast } = useToasts();

  const handleMenuSelect = () => {
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
    <div>
      <div className="fixed bottom-0 left-0 w-full bg-[#0f1b2b] border-t border-[#283548] lg:hidden z-40">
        <div className="grid grid-cols-6 text-center py-1">
          {/* Menu Item 1 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer"
          >
            <BsGridFill size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Main</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>

          {/* Menu Item 2 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer"
          >
            <PiCrownFill size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Live</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>

          {/* Menu Item 3 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer"
          >
            <BsSuitClubFill size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Casino</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>

          {/* Menu Item 4 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer"
          >
            <GiFemaleVampire size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Live Dealers</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>

          {/* Menu Item 5 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#ff003d] duration-300 cursor-pointer"
          >
            <GiFeatherWound size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Aviator</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>

          {/* Menu Item 6 */}
          <div
            onClick={handleMenuSelect}
            className="flex flex-col items-center pt-1.5 text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer"
          >
            <FaGift size={18} />
            <span className="text-[10px] pt-1 pb-1.5">Bonuses</span>
            {/* <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p> */}
          </div>
          {isApiModalOpen && (
            <ApiConnectionModal
              closeApiModal={() => setIsApiModalOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
