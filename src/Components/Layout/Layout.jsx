import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
function Layout() {
  return (
    <>
      <Navbar />
      <div className="container p-5 m-5">
      <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
