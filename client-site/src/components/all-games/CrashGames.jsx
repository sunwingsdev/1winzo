import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import crashGamesImg from "../../assets/menu/7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";
import { gamesData } from "../shared/GamesData";

const CrashGames = () => {
  const swiperRef5 = useRef(null);
  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef5.current && swiperRef5.current.swiper) {
      swiperRef5.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-dvw max-w-[100%] overflow-hidden rounded-md relative mx-auto bg-gradient-to-b from-[#0e192a] to-[#091222] px-2">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between  py-4">
        <div className="flex flex-row items-center gap-1">
          <img
            src={crashGamesImg}
            className="w-10 h-10"
            alt="new game category image"
          />
          <h1 className="text-lg font-bold text-white whitespace-nowrap">
            Crash Games
          </h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="px-2 md:px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-xs md:text-sm text-slate-400">88 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2 2xl:pr-16">
            <div className="crash-prev bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-base md:text-xl" />
            </div>
            <div className="crash-next bg-[#152436] w-6 md:w-8 h-6 md:h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-base md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef5} // Attach ref to Swiper
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
            prevEl: ".crash-prev",
            nextEl: ".crash-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {gamesData.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="text-white rounded-md text-center">
                <Games img={game.img} title={game.title} /> {/* Pass props */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CrashGames;
