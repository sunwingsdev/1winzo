import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../assets/popular/2.jpg";
import img3 from "../../assets/popular/3.jpg";
import img4 from "../../assets/popular/4.jpg";
import img5 from "../../assets/popular/5.jpg";
import img6 from "../../assets/popular/6.jpg";
import img7 from "../../assets/popular/7.jpg";
import img8 from "../../assets/popular/8.jpg";
import img9 from "../../assets/popular/9.jpg";
import img10 from "../../assets/popular/10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const MobileSlider = () => {
  const sliderData = [
    { id: 1, img: img2, title: "Super Ace" },
    { id: 2, img: img3, title: "Funcky Time" },
    { id: 3, img: img4, title: "Fortune Gems" },
    { id: 4, img: img5, title: "Super Burning" },
    { id: 5, img: img6, title: "Dragon Pearls" },
    { id: 6, img: img7, title: "Dream Catcher" },
    { id: 7, img: img8, title: "Coin Volcano" },
    { id: 8, img: img9, title: "Luckey Neko" },
    { id: 9, img: img10, title: "Bonus Mania" },
  ];
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex flex-col items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-28 rounded-xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full text-center">
                <p className="text-white whitespace-nowrap text-sm">
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MobileSlider;
