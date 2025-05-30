import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import rabetImg from "../../assets/menu/3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";
import { gamesData } from "../shared/GamesData";

const RabetExclusive = ({ games, title, photo }) => {
  const swiperRef1 = useRef(null);
  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-dvw max-w-[100%] overflow-hidden rounded-md relative mx-auto bg-gradient-to-b from-[#0e192a] to-[#091222] px-2">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between  py-4">
        <div className="flex flex-row items-center gap-1">
          <img src={photo} className="w-10 h-10" alt="popular category image" />
          <h1 className="text-lg font-bold text-white whitespace-nowrap">
            {title}
          </h1>
        </div>
        <div className="flex flex-row items-center gap-2 2xl:pr-16">
          <div className="px-2 md:px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-xs md:text-sm text-slate-400">
              {games?.length} Games
            </p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2">
            <div className="rabet-prev bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-base md:text-xl" />
            </div>
            <div className="rabet-next bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-base md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef1} // Attach ref to Swiper
          breakpoints={{
            640: {
              slidesPerView: 4, // 640px স্ক্রিনে 3 স্লাইড দেখাবে
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 5, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 7, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
            1920: {
              slidesPerView: 9, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
          }}
          slidesPerView={2}
          spaceBetween={8}
          navigation={{
            prevEl: ".rabet-prev",
            nextEl: ".rabet-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {games?.map((game) => (
            <SwiperSlide key={game?._id}>
              <div className="text-white rounded-md text-center">
                <Games
                  img={`${import.meta.env.VITE_BASE_API_URL}${game?.image}`}
                  title={game?.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RabetExclusive;
