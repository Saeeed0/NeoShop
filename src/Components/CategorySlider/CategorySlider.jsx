import { Swiper, SwiperSlide } from "swiper/react";
import style from "./CategorySlider.module.css";
import { Autoplay, Pagination } from "swiper/modules";
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
      <h2>CategorySlider</h2>
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={0}
          slidesPerView={5}
          slidesPerGroup={5}
          className={`mySwiper`}
        >
          {data?.data.data.map((category) => (
            <SwiperSlide>
              <img
                height={200}
                src={category.image}
                alt={category.title}
                className="w-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CategorySlider;
