import { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { cartContext } from "../Context/CartContext";
import { BallTriangle } from "react-loader-spinner";
function Cart() {
  const {
    getLoggedUserCart,
    removeCartItem,
    clearUserCart,
    updateProductQuantity,
  } = useContext(cartContext);

  let [cartDetails, setCartDetails] = useState(null);

  async function getUserCart() {
    const { data } = await getLoggedUserCart();
    setCartDetails(data);
    console.log(data);
  }

  async function updateQuantity(productId, count) {
    const { data } = await updateProductQuantity(productId, count);
    setCartDetails(data);
  }

  async function removeCat() {
    const { data } = await clearUserCart();
    setCartDetails(null);
    console.log("data", data);
  }
  async function removeItem(productId) {
    const { data } = await removeCartItem(productId);
    console.log("data", data);
    setCartDetails(data);
  }
  useEffect(() => {
    getUserCart();
  }, []);

  return (
    <>
      {cartDetails?.data?.products ? (
        <div className="row m-75 rounded-top-4 m-2  ">
          <div className="row bg-main-light m-0 p-2  rounded-top-4 fw-bold text-center">
            <div className="col-1">IMAGE </div>
            <div className="col-6">PRODUCT</div>
            <div className="col-2">QTY</div>
            <div className="col-2">PRICE</div>
            <div className="col-1">ACTION</div>
          </div>
          {cartDetails?.data?.products.map((product) => (
            <div
              key={product._id}
              className="row align-items-center text-center  border border-top-0 m-0 p-2 "
            >
              {/* product image */}
              <div className="col-1">
                <img
                  className="w-100"
                  src={product.product.imageCover}
                  alt=""
                />
              </div>

              {/* product title*/}
              <div className="col-6">{product.product.title}</div>

              {/* product QTY */}
              <div className="col-2">
                <button
                  onClick={() =>
                    updateQuantity(product.product._id, product.count - 1)
                  }
                  className="btn border rounded-circle m-2"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                {product.count}
                <button
                  onClick={() =>
                    updateQuantity(product.product._id, product.count + 1)
                  }
                  className="btn border rounded-circle  m-2"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              {/* product price */}

              <div className="col-2">{product.price} EGP</div>

              {/* product action */}

              <div className="col-1">
                <button
                  className="btn"
                  onClick={() => removeItem(product.product._id)}
                >
                  <i className="fas  fa-trash-can fs-3 text-danger"></i>
                </button>
              </div>
            </div>
          ))}

          <div className="my-3 fs-4 fw-semibold d-flex">
            <button
              onClick={() => {
                console.log(cartDetails?.data._id);

                removeCat();
              }}
              className="btn  btn-danger"
            >
              Clear All
            </button>
            <button className="btn ms-3 btn-success">Check Out</button>
            <p className="ms-auto">
              Total Price{" "}
              <span className="text-danger fw-bold">
                {cartDetails?.data.totalCartPrice}{" "}
              </span>{" "}
              EGP
            </p>
          </div>
        </div>
      ) : (
        <div  style={{ transform: "translateY(-145px)" }} class="vh-100 d-flex justify-content-center align-items-center">
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
      )}
    </>
  );
}

export default Cart;
