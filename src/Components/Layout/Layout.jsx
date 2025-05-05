import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from "./Layout.module.css";
import UserContextProvider from "../Context/UserContext";
function Layout() {
  
  return (
    <>
      <UserContextProvider >
        <Navbar />
        <div className="container p-5 m-5">
          <Outlet></Outlet>
        </div>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default Layout;
