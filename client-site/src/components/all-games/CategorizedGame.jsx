import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";

const CategorizedGame = ({ games = [], title, photo }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, [games]);

  return (
    <div className="w-dvw max-w-[100%] overflow-hidden rounded-md relative mx-auto bg-gradient-to-b from-[#0e192a] to-[#091222] px-2">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-1">
          {photo && (
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${photo}`}
              className="w-10 h-10"
              alt={`${title} category image`}
            />
          )}
          <h1 className="text-lg font-bold text-white whitespace-nowrap capitalize">
            {title}
          </h1>
        </div>

        <div className="flex flex-row items-center gap-2 2xl:pr-16">
          <div className="px-2 md:px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-xs md:text-sm text-slate-400">
              {games?.length || 0} Games
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="custom-prev bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-base md:text-xl" />
            </div>
            <div className="custom-next bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-base md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 12 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
          1536: { slidesPerView: 7 },
          1920: { slidesPerView: 9 },
        }}
        slidesPerView={2}
        spaceBetween={8}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {games?.map((game) => (
          <SwiperSlide key={game?._id}>
            <div className="text-white rounded-md text-center">
              <Games game={game} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorizedGame;
