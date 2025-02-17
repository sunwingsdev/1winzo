import { Swiper, SwiperSlide } from "swiper/react";
import popularImg from "../../assets/images/icons/popular.png";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import Games from "../shared/Games";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from "react";
import { gamesData } from "../shared/GamesData";

const PopularCategory = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper instance

  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-dvw max-w-[100%] overflow-hidden rounded-md relative mx-auto bg-gradient-to-b from-[#0e192a] to-[#091222] px-2">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-1">
          <img
            src={popularImg}
            className="w-10 h-10"
            alt="popular category image"
          />
          <h1 className="text-lg font-bold text-white whitespace-nowrap">
            Popular
          </h1>
        </div>
        <div className="flex flex-row items-center gap-2 2xl:pr-16">
          <div className="px-2 md:px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-xs md:text-sm text-slate-400">114 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
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
      <div>
        <Swiper
          ref={swiperRef} // Attach ref to Swiper
          breakpoints={{
            640: {
              slidesPerView: 4, // 640px স্ক্রিনে 3 স্লাইড দেখাবে
              spaceBetween: 12,
              grid: {
                rows: 2,
                fill: "col",
              },
            },
            1280: {
              slidesPerView: 5, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
              spaceBetween: 20,
              grid: {
                rows: 2,
                fill: "col",
              },
            },
            1536: {
              slidesPerView: 7, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
              grid: {
                rows: 2,
                fill: "col",
              },
            },
            1920: {
              slidesPerView: 9, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
              grid: {
                rows: 2,
                fill: "col",
              },
            },
          }}
          slidesPerView={2}
          spaceBetween={8}
          grid={{
            rows: 2,
            fill: "col",
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {gamesData?.map((game) => (
            <SwiperSlide key={game?.id}>
              <div className="text-white rounded-md text-center">
                <Games img={game?.img} title={game?.title} /> {/* Pass props */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategory;
