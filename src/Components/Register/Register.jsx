import { useFormik } from "formik";
import style from "./Register.module.css";
function Register() {
  function submiRegister(values) {
    console.log(values);
    console.log(formik);
  }

  function validate(values) {
    const errors = {};
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    const phonePattern = /^(010|011|012|015)[0-9]{8}$/;

    if (!values.name) {
      errors.name = "Please enter your name";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    } else if (values.name.length > 15) {
      errors.name = "Name must not exceed 15 characters";
    }

    if (!values.email) {
      errors.email = "Please enter your email address";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email format is not valid (e.g. example@mail.com)";
    }

    if (!values.phone) {
      errors.phone = "Please enter your phone number";
    } else if (!phonePattern.test(values.phone)) {
      errors.phone =
        "Phone number must start with 010, 011, 012, or 015 and be 11 digits";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (!passwordPattern.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    }

    if (!values.rePassword) {
      errors.rePassword = "Please confirm your password";
    } else if (values.rePassword !== values.password) {
      errors.rePassword = "Passwords do not match";
    }

    return errors;
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validate,
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              required
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              required
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
