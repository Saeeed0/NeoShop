import { useFormik } from "formik";
import style from "./Address.module.css";
import { cartContext } from "../Context/CartContext";
import { useContext } from "react";

function Address() {
  const { onlinePayment, cartId } = useContext(cartContext);

  async function handleAddressSubmit(values) {
    const { data } = await onlinePayment(
      "http://localhost:3000",
      cartId,
      values
    );

    window.location.href = data?.session.url;
  }
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handleAddressSubmit,
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <input
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
              name="details"
              id="details"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              name="phone"
              id="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              name="city"
              id="city"
            />
          </div>
          <button type="submit" className="btn bg-main text-light">
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Address;
