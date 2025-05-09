import { Swiper, SwiperSlide } from "swiper/react";
import style from "./MainSlider.module.css";
import { Autoplay, EffectFlip, Pagination } from "swiper/modules";
import slider1 from "../../Assets/images/slider-image-1.jpeg";
import slider2 from "../../Assets/images/slider-image-2.jpeg";
import slider3 from "../../Assets/images/slider-image-3.jpeg";
function MainSlider() {
  return (
    <>
      <div className="row my-4 m-0 ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1000 }}
          loop={true}
          speed={1000}
          spaceBetween={0}
          slidesPerView={1}
          className={`${style.customSwiper} col-md-8 p-0 cursor-pointer`}
        >
          <SwiperSlide className="p-0 m-0">
            <img height="400" className="w-100" src={slider1} alt="slider1" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img height="400" className="w-100" src={slider2} alt="slider2" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img height="400" className="w-100" src={slider3} alt="slider2" />
          </SwiperSlide>
        </Swiper>
        <div className="col-md-4 p-0">
          <img height={200} className="w-100" src={slider1} alt="" />
          <img height={200} className="w-100" src={slider2} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainSlider;
