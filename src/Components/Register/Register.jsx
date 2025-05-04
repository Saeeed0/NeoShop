import { useFormik } from "formik";
import style from "./Register.module.css";
import * as Yup from "yup";
function Register() {
  function submiRegister(values) {
    console.log(values);
    console.log(formik);
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must not exceed 15 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Email format is not valid (e.g. example@mail.com)")
      .required("Please enter your email address"),

    phone: Yup.string()
      .matches(
        /^(010|011|012|015)[0-9]{8}$/,
        "Phone number must start with 010, 011, 012, or 015 and be 11 digits"
      )
      .required("Please enter your phone number"),

    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      )
      .required("Please enter your password"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submiRegister,
  });
  return (
    <>
      <div className="w-75 mx-auto py-5">
        <h2>Register Now</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className=" mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="alert  alert-danger" role="alert">
                {formik.errors.name}
              </div>
            )}
          </div>
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
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              {...formik.getFieldProps("phone")}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="alert alert-danger" role="alert">
                {formik.errors.phone}
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
          <div className=" mb-3">
            <label htmlFor="rePassword" className="form-label">
              RePassword
            </label>
            <input
              type="password"
              className="form-control"
              name="rePassword"
              id="rePassword"
              {...formik.getFieldProps("rePassword")}
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <div className="alert alert-danger" role="alert">
                {formik.errors.rePassword}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            className="btn bg-main text-light"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
