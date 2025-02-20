import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const TopSlider = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const sliders = homeControls?.filter(
    (control) => control.category === "slider" && control.isSelected
  );
  
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
        {sliders?.map((slider) => (
          <SwiperSlide key={slider._id}>
            <img
              className="object-fill h-28 sm:h-44 md:h-52 lg:h-60 xl:h-72 2xl:h-auto w-full rounded-md"
              src={`${import.meta.env.VITE_BASE_API_URL}${slider.image}`}
              alt="Slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
