import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
import UserContextProvider from "../Context/UserContext";
import CartContextProvider from "../Context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {
  return (
    <>
      <ToastContainer />

      <UserContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="position-relative p-5 m-5">
            <Outlet></Outlet>
          </div>
          <Footer />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default Layout;
