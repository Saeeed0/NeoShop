import axios from "axios";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Helmet } from "react-helmet";

function ProductDetails() {
  const { id } = useParams();
  async function getProductDetails(id) {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["ProductDetails", id],
    queryFn: () => getProductDetails(id),
  });

  return (
    <>
      {data?.data.data && (
        <div className="row  align-items-center py-2">
          <Helmet>
            <title>{data.data.data.title}</title>
            <meta name="description" content={data.data.data.description} />
          </Helmet>
          <div className="col-md-4">
            <img
              className="w-100"
              src={data?.data.data.imageCover}
              alt={data?.data.data.title}
            />
          </div>
          <div className="col-md-8">
            <h2 className="">{data?.data.data.title}</h2>
            <p>{data?.data.data.description}</p>
            <h6 className="text-main">{data?.data.data.category?.name}</h6>
            <h6 className="text-main">Price: {data?.data.data.price}EGP</h6>
            <div className="d-flex justify-content-between">
              <span>ratingsQuantity: {data?.data.data.ratingsQuantity}</span>
              <span>
                <i className="fas fa-star rating-color">
                  {data?.data.data.ratingsAverage}
                </i>
              </span>
            </div>

            <button className="btn bg-main text-light w-100 mt-2">
              Add to cart
            </button>
          </div>
          <div className="">
            <div className="col-md-4 mx-auto">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
              >
                {data?.data.data.images.map((image, index) => (
                  <SwiperSlide key={index} className=" m-auto">
                    <img
                      className="w-100"
                      src={image}
                      alt={data?.data.data.title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
