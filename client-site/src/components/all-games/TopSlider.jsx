import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";

const TopSlider = () => {
  return (
    <div className="rounded-md relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-md"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            className="h-auto w-full rounded-md"
            src={image1}
            alt="Slide 1"
          />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <img
            className="h-auto w-full rounded-md"
            src={image2}
            alt="Slide 2"
          />
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <img
            className="h-auto w-full rounded-md"
            src={image3}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
