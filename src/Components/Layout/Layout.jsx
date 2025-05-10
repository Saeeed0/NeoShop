import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
import UserContextProvider from "../Context/UserContext";
import CartContextProvider from "../Context/CartContext";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Offline } from "react-detect-offline";
function Layout() {
  return (
    <>
      {/* <ToastContainer /> */}
      <Toaster />
      <UserContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="position-relative p-5 m-5">
            <Outlet></Outlet>
          </div>
          <Footer />
        </CartContextProvider>
      </UserContextProvider>

      <Offline>
        <div className="network">
          You're offline right now. Check your connection.
        </div>
      </Offline>
    </>
  );
}

export default Layout;
