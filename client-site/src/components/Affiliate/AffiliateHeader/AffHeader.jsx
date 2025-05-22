import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import image from "../../../assets/affiliateImages/logo.png";
import downloadDownImage from "../../../assets/affiliateImages/downloadDown.png";
import downloadUpImage from "../../../assets/affiliateImages/downloadDown.png";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const AffHeader = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: homeControls, isLoading } = useGetHomeControlsQuery();
  const images = [downloadDownImage, downloadUpImage];

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );
  return (
    <div className="flex justify-between items-center bg-bgSecondary px-4 py-3 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center">
        {isLoading ? (
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <Link to="/">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
              alt="Logo"
              className="h-7 w-auto"
            />
          </Link>
        )}
      </div>

      {/* Right: Flex group */}
      <div className="flex items-center space-x-6">
        <div className="flex gap-2 w-[15%]">
          {images.map((img, index) => (
            <div key={index} className="relative w-10 h-10">
              <img
                src={img}
                alt={`icon-${index}`}
                className="w-full h-full object-contain"
              />
              <span className="absolute -top-1 -right-2 bg-bgBlack text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          ))}
        </div>

        {/* AF box */}
        <div className="flex gap-2">
          <div className="flex items-center bg-bgBlack text-white px-2 py-1 rounded">
            <span className="text-xs font-bold">{user?.role}</span>
          </div>

          {/* play71## text */}
          <div className="text-sm font-medium text-white">{user?.username}</div>
        </div>

        {/* Main block with BDT & loader */}
        <div className="flex items-center  text-white px-3 py-1 rounded space-x-2">
          <div className="flex items-center bg-bgBlack text-white px-2 py-1 rounded">
            <span className="text-sm font-semibold">Main</span>
          </div>

          <span className="text-sm">BDT 1,250</span>
          <span
            className="bg-gradient-to-r from-[#0000004d] via-[#212529]  rounded-md hover:border p-2"
            style={{ boxShadow: "inset 0 1px 0 0 #ffffff80" }}
          >
            <AiOutlineReload className=" text-white font-bold text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AffHeader;
