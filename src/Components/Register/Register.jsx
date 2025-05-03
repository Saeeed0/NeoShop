import { useFormik } from "formik";
import style from "./Register.module.css";
function Register() {
  function submiRegister(values) {
    console.log(values);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    
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
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="rePassword" className="form-label">
              RePassword
            </label>
            <input
              type="password"
              className="form-control"
              id="rePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              required
            />
          </div>
          <button type="submit" className="btn bg-main text-light">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
