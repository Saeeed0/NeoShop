import { Swiper, SwiperSlide } from "swiper/react";
import style from "./CategorySlider.module.css";
import { Autoplay, EffectFlip, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function CategorySlider() {
  async function getCategories() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  let { data } = useQuery({ queryKey: ["categories"], queryFn: getCategories });
  return (
    <>
      <div className="">
        {data && (
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 300,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            spaceBetween={0}
            slidesPerView={7}
            slidesPerGroup={1}
            className={`${style.customSwiper} cursor-pointer`}
          >
            {data?.data.data.map((category) => (
              <SwiperSlide key={category._id}>
                <img
                  height={200}
                  src={category.image}
                  alt={category.title}
                  className="w-100"
                />
                <span className="text-main">{category.name}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
}

export default CategorySlider;
