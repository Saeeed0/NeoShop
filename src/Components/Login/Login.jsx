import { useFormik } from "formik";
import style from "./Login.module.css";
import * as Yup from "yup";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { userContext } from "../Context/UserContext";
function Login() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  const { setUserToken } = useContext(userContext);
  
  async function submiLogin(values) {
    setIsLoading(true);
    const { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        setIsLoading(false);
        setApiError(err.response.data.message);
      });

    if (data?.message === "success") {
      setIsLoading(false);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/");
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email format is not valid (e.g. example@mail.com)")
      .required("Please enter your email address"),

    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      )
      .required("Please enter your password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submiLogin,
  });
  return (
    <>
      <div className="w-75 mx-auto py-5">
        {apiError && (
          <div className="alert alert-danger" role="alert">
            {apiError}
          </div>
        )}

        <h2>Login Now</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className=" mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="alert alert-danger" role="alert">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className=" mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="alert alert-danger" role="alert">
                {formik.errors.password}
              </div>
            )}
          </div>

          {
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="btn bg-main mx-2 text-light"
            >
              {isLoading ? (
                <BallTriangle
                  height={20}
                  width={50}
                  radius={10}
                  color="#fff"
                  ariaLabel="ball-triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Login"
              )}
            </button>
          }
          <Link className="btn" to="/Register">
            Register Now
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
