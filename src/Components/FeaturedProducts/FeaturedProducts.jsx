import { useEffect, useState } from "react";
import style from "./FeaturedProducts.module.css";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  let [enabledQuery, setEnabledQuery] = useState(false);
  function getFeaturedProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  let { isLoading, isFetched, isError, data, refetch } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
    refetchInterval: 5000,
    staleTime: 1000,
    // enabled: enabledQuery,
  });
  console.log(data?.data.data);

  // const [products, setProducts] = useState([]);
  // let [isLoading, setIsLoading] = useState(false);
  // async function getFeaturedProducts() {
  //   setIsLoading(true);
  //   const { data } = await axios.get(
  //     "https://ecommerce.routemisr.com/api/v1/products"
  //   );
  //   if (data?.data) {
  //     setProducts(data.data);
  //     setIsLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getFeaturedProducts();
  // }, []);

  return (
    <>
      <h2>Featured Products</h2>

      {isLoading ? (
        <div
          style={{ transform: "translateY(-145px)" }}
          className="vh-100 d-flex justify-content-center align-items-center "
        >
          <BallTriangle
            height={80}
            width={150}
            radius={5}
            color="green"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="row">
          {data?.data.data.map((product) => (
            <Link
              to={`ProductDetails/${product._id}`}
              key={product._id}
              className="col-md-2"
            >
              <div className="product cursor-pointer py-3 px-2">
                <img
                  className="w-100"
                  src={product.imageCover}
                  alt={product.title}
                />
                <span className="text-main font-sm fw-bolder">
                  {product.category.name}
                </span>
                <h3 className="h6">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="d-flex justify-content-between mt-3">
                  <span>{product.price} EGP</span>
                  <span>
                    <i className="fas fa-star rating-color"></i>{" "}
                    {product.ratingsAverage}
                  </span>
                </div>
                <button className="btn bg-main text-white w-100 btn-sm mt-2">
                  add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default FeaturedProducts;
